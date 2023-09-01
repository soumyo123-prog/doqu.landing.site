import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import axios from "axios";
import NavBar from "../NavBar";
import Pagination from "../Pagination";
import EncNode from "./EncNode";
import { medicalTermCodingMenuData } from "../MedicalTermCodingMenu";

export default function MeddraEncoderPage({ terms }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const id = window.location.pathname.split("/")[2];
  const [app, setApp] = useState({});
  const [activeVersionLeft, setActiveVersionLeft] = useState("");
  const [activeVersionRight, setActiveVersionRight] = useState("");
  const [activeTerm, setActiveTerm] = useState("");
  const [appNodes, setAppNodes] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState({});
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    const menuItem = medicalTermCodingMenuData.find(
      (item) => item.encoder_app_id === id
    );
    if (menuItem) {
      setTitle(menuItem.name);
      setDescription(menuItem.description);
    }
  }, []);

  const getEncoderApp = async () => {
    try {
      const { data } = await axios.get(
        `${customFields.BASE_API_URL}/encoders/encoder_apps/get_encoder_app?encoder_app_id=${id}`
      );
      setApp(data);
      data.versions.forEach((version) => {
        if (version.is_default) {
          setActiveVersionLeft(version.version_name);
          setActiveVersionRight(version.version_name);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllNodes = async () => {
    try {
      const { data } = await axios.get(
        `${customFields.BASE_API_URL}/encoders/encoder_ontology/get_nodes?encoder_app_id=${id}&version_name=${activeVersionRight}`
      );
      setAppNodes(data.nodes);
    } catch (error) {
      console.log(error);
    }
  };

  const [expansionLoading, setExpansionLoading] = useState("");
  const getChildrenNodes = async (code) => {
    setExpansionLoading(code);
    try {
      const { data } = await axios.get(
        `${customFields.BASE_API_URL}/encoders/encoder_ontology/get_nodes?encoder_app_id=${id}&version_name=${activeVersionRight}&parent_node_code=${code}`
      );
      setExpandedNodes({
        ...expandedNodes,
        [code]: data.nodes,
      });
    } catch (error) {
      console.log(error);
    }
    setExpansionLoading("");
  };
  useEffect(() => {
    getEncoderApp();
    if (activeVersionRight) getAllNodes();
  }, [activeVersionRight]);

  const [predictions, setPredictions] = useState({});

  const [page, setPage] = useState(1);

  const getPredictions = async () => {
    try {
      const { data } = await axios.get(
        `${customFields.BASE_API_URL}/encoders/encoder_predictions/get_predictions?encoder_app_id=${id}&version_name=${activeVersionLeft}&term=${activeTerm}&page=${page}`
      );
      setPredictions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeTerm) getPredictions();
  }, [page]);

  return (
    <>
      <NavBar activeTab={"medical-term-coding"} />
      <div className="hidden md:flex p-4 page-template flex gap-2">
        <div className="w-1/2">
          <div>
            <div className="bg-white border-theme p-2 my-2 rounded">
              <div className="font-semibold">{title}</div>
              <p className="text-gray-500">{description}</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getPredictions();
              }}
            >
              <div className="flex gap-2 items-center my-1">
                <select
                  className="w-full"
                  value={activeTerm}
                  onChange={(e) => setActiveTerm(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Select Term
                  </option>
                  {terms.map((term, index) => (
                    <option value={index}>{term.term}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          {activeTerm && (
            <div className="bg-white border-theme rounded mt-2">
              <div className="w-full h-full overflow-auto relative">
                <table className="enc-table">
                  <thead>
                    <tr>
                      {Object.keys(terms[activeTerm].mappings[0]).map(
                        (column_name) => (
                          <th key={column_name}>{column_name}</th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {terms[activeTerm].mappings.map((mapping, index) => (
                      <tr key={index}>
                        {Object.values(mapping).map((data, index) => (
                          <td key={index}>{data}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div
            className="bg-white border-theme rounded mt-2"
            style={{ height: "calc(100vh - 15.5rem)" }}
          >
            {Object.keys(predictions).length > 0 ? (
              <div className="w-full h-full overflow-auto relative">
                <div className="text-desc py-1 px-2">
                  Recommendations for:{" "}
                  <span className="font-medium">{activeTerm}</span>
                </div>
                <table className="enc-table">
                  <thead>
                    <tr>
                      {predictions.column_names.map((column_name) => (
                        <th key={column_name}>{column_name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.records.map((record, index) => (
                      <tr key={index}>
                        {record.record_data.map((data) => (
                          <td
                            key={data.column_name}
                            dangerouslySetInnerHTML={{
                              __html: data.column_value,
                            }}
                          ></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  page={page}
                  setPage={setPage}
                  lastPage={predictions.total_count / 50}
                  size="md"
                  isContainerWhite={true}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center text-desc h-full">
                Matching results are displayed here
              </div>
            )}
          </div>
        </div>
        <div className="bg-white border-theme rounded w-1/2 p-2 my-2">
          <div className="flex">
            <div className="tab-yellow cursor-pointer active">
              <span>Hierarchy browser</span>
              <span></span>
            </div>
          </div>
          <div
            className="overflow-y-auto"
            style={{ height: "calc(100vh - 11.5rem)" }}
          >
            {appNodes.length > 0 ? (
              appNodes.map((node) => (
                <EncNode
                  key={node.node_id}
                  node={node}
                  expandedNodes={expandedNodes}
                  setExpandedNodes={setExpandedNodes}
                  getChildrenNodes={getChildrenNodes}
                  expansionLoading={expansionLoading}
                />
              ))
            ) : (
              <div className="flex justify-center items-center text-desc h-full">
                <span>
                  <button className="text-blue-500 hover:cursor-pointer">
                    Login
                  </button>
                </span>
                <span>&nbsp;to browse the ontology</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="md:hidden px-8 py-4 flex gap-4 page-template overflow-auto"
        style={{ height: "calc(100vh - 3.3rem)" }}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="text-gray-500 font-semibold flex w-full">
            <div className="text-gray-500 font-semibold flex w-full text-xs">
              MEDICAL TERM CODING&nbsp;{">"}&nbsp;{title}&nbsp;{">"}
            </div>
          </div>
          <div>
            <div className="bg-white border-theme p-2 my-2 rounded">
              <div className="font-semibold">{title}</div>
              <p className="text-gray-500">{description}</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getPredictions();
              }}
            >
              <div className="flex gap-2 items-center my-1">
                <select
                  className="w-full"
                  value={activeTerm}
                  onChange={(e) => setActiveTerm(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Select Term
                  </option>
                  {terms.map((term, index) => (
                    <option value={index}>{term.term}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          {activeTerm && (
            <div className="bg-white border-theme rounded mt-2">
              <div className="w-full h-full overflow-auto relative">
                <table className="enc-table">
                  <thead>
                    <tr>
                      {Object.keys(terms[activeTerm].mappings[0]).map(
                        (column_name) => (
                          <th key={column_name}>{column_name}</th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {terms[activeTerm].mappings.map((mapping, index) => (
                      <tr key={index}>
                        {Object.values(mapping).map((data, index) => (
                          <td key={index}>{data}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div
            className="bg-white border-theme rounded mt-2"
            style={{ height: "calc(100vh - 15.5rem)" }}
          >
            {Object.keys(predictions).length > 0 ? (
              <div className="w-full h-full overflow-auto relative">
                <div className="text-desc py-1 px-2">
                  Recommendations for:{" "}
                  <span className="font-medium">{activeTerm}</span>
                </div>
                <table className="enc-table">
                  <thead>
                    <tr>
                      {predictions.column_names.map((column_name) => (
                        <th key={column_name}>{column_name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.records.map((record, index) => (
                      <tr key={index}>
                        {record.record_data.map((data) => (
                          <td
                            key={data.column_name}
                            dangerouslySetInnerHTML={{
                              __html: data.column_value,
                            }}
                          ></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  page={page}
                  setPage={setPage}
                  lastPage={predictions.total_count / 50}
                  size="md"
                  isContainerWhite={true}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center text-desc h-full">
                Matching results are displayed here
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
