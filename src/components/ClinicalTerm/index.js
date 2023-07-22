import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import truncateString from "../../../components/utils/truncateString";
import dummyIcon from "../../../assets/Dummy.svg";
import { BASE_API_URL } from "../../constants";
import NavBar from "../NavBar";

const ClinicalDocHome = () => {
  const navigate = useNavigate();

  const [apps, setApps] = useState([]);
  const getEncoderApps = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_API_URL}/encoders/encoder_apps/get_encoder_apps`
      );
      setApps(data.encoder_apps);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEncoderApps();
  }, []);

  return (
    <>
      <NavBar activeTab={"clinical_term"} />
      <div className="px-32 py-4">
        <h2 className="w-1/2 mx-auto text-center text-black">
          Explore the Future of Clinical Coding with Our AI-Powered Apps
        </h2>
        <div
          style={{
            borderTop: "1px solid #70768c",
            borderBottom: "1px solid #70768c",
          }}
        >
          <p className="my-2 mx-5 text-center">
            Harness the power of Artificial Intelligence with our selection of
            AI-powered coding apps. These tools are designed to help coders
            automate, streamline, and enhance their work process. Explore, try,
            and unlock new coding potentials!
          </p>
        </div>
        <div className="font-bold my-4 text-black">Try AI powered encoders now:</div>
        <div className="app-view-container">
          {apps.map((app) => (
            <div
              className="node default flex flex-col justify-between cursor-pointer"
              key={app.encoder_app_id}
              onClick={() => navigate(`/encoder_apps/${app.encoder_app_id}`)}
            >
              <div>
                <div className="head">
                  <div title={app.name}>
                    <img src={dummyIcon} alt="node-icon" />
                    {truncateString(app.name, 25)}
                  </div>
                </div>
                <div className="body">
                  <p>{app.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClinicalDocHome;
