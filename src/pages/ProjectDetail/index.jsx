import React from "react";
import { useParams } from "react-router";

const ProjectDetail = () => {
    const params = useParams();

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Project Details {params.id}</h1>
        </div>
    );
};

export default ProjectDetail;
