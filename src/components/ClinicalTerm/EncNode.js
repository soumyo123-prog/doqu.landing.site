import React from "react";
import { TbTriangle, TbRefresh } from "react-icons/tb";

const EncNode = ({
  node,
  expandedNodes,
  setExpandedNodes,
  getChildrenNodes,
  expansionLoading,
}) => {
  const isExpanded = Object.keys(expandedNodes).includes(node.node_id) || false;
  const handleClick = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      let newExpandedNodes = { ...expandedNodes };
      delete newExpandedNodes[node.node_id];
      setExpandedNodes(newExpandedNodes);
    } else {
      if (node.is_leaf_node) return;
      getChildrenNodes(node.node_id);
    }
  };
  const showLoadingIcon = expansionLoading === node.node_id ? true : false;

  return (
    <div key={node.node_id}>
      <div className="flex enc-node-item">
        {showLoadingIcon ? (
          <span className="mx-[0.15rem]">
            <TbRefresh className="animate-spin" />
          </span>
        ) : isExpanded ? (
          <span onClick={handleClick}>
            <TbTriangle className="transform rotate-180" />
          </span>
        ) : !node.is_leaf_node ? (
          <span onClick={handleClick}>
            <TbTriangle className="transform rotate-90" />
          </span>
        ) : (
          <span onClick={handleClick}>
            <TbTriangle className="invisible" />
          </span>
        )}
        <div>{node.node_title}</div>
      </div>
      {isExpanded && (
        <div className="ml-4">
          {expandedNodes[node.node_id].map((child) => (
            <EncNode
              key={child.node_id}
              node={child}
              expandedNodes={expandedNodes}
              setExpandedNodes={setExpandedNodes}
              getChildrenNodes={getChildrenNodes}
              expansionLoading={expansionLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EncNode;
