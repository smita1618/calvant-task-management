import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import taskService from "../services/taskService";
import Joyride from "react-joyride";

const TaskManagementDashboard = () => {
  const history = useHistory();

  const [user] = useState(() =>
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [run, setRun] = useState(false);

  const [taskStats, setTaskStats] = useState({
    total: 0,
    myTasks: 0,
    pendingApproval: 0,
    completed: 0,
  });

  const steps = [
    {
      target: "#task-stats",
      content: "This section shows a quick overview of tasks.",
    },
    {
      target: "#my-tasks-card",
      content: "Click here to manage and complete your assigned tasks.",
    },
    {
      target: "#approval-card",
      content: "Tasks awaiting approval appear here.",
    },
  ];

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

const loadTaskStats = useCallback(async () => {
  try {
    const tasks = await taskService.getAllTasks();
    if (!Array.isArray(tasks) || !user) return;

    const orgTasks = tasks.filter(
      (t) => t.organization === user.organization
    );

    // My Tasks = tasks assigned to logged-in user ONLY
const myTasks = orgTasks.filter(
  (t) => t.assignedTo === user.email
);



    const pendingApproval = orgTasks.filter(
      (t) => t.status === "Completed" && t.approved !== true
    );

    const completed = orgTasks.filter(
      (t) => t.status === "Approved"
    );

    setTaskStats({
      total: orgTasks.length,
      myTasks: myTasks.length,
      pendingApproval: pendingApproval.length,
      completed: completed.length,
    });
  } catch (error) {
    console.error("Error loading task stats:", error);
  }
}, [user]);


  useEffect(() => {
    loadTaskStats();
  }, [loadTaskStats]);

  if (!user) return null;

  const pageStyle = {
    padding: "10px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const headerStyle = {
    background: "white",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    border: "1px solid #e9ecef",
    textAlign: "center",
  };

  const statsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "12px",
    marginBottom: "15px",
  };

  const cardStyle = {
    background: "white",
    padding: "14px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    border: "1px solid #e9ecef",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };
  const actionsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "12px",
};

const actionCardStyle = {
  background: "white",
  padding: "14px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  textAlign: "center",
  border: "1px solid #e9ecef",
  transition: "all 0.2s ease",
  cursor: "pointer",
};


  return (
    <div style={pageStyle}>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        styles={{
          options: {
            primaryColor: "#3498db",
          },
        }}
      />

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: "22px", marginBottom: "6px",color: "black" }}>
          Task Management Dashboard
        </h1>
        <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
          Track, Complete, and Approve Risk Treatment Tasks
        </p>
        <button
          onClick={() => {
            setRun(false);
            setTimeout(() => setRun(true), 50);
          }}
          style={{
            marginTop: "8px",
            padding: "8px 16px",
            background: "#3498db",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Tutorial
        </button>
      </div>

      {/* Stats Cards */}
      <div id="task-stats" style={statsStyle}>
        <div
          style={cardStyle}
          onClick={() => history.push("/task-management/tasks")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h2 style={{ color: "#3498db", fontSize: "28px" }}>
            {taskStats.total}
          </h2>
          <p>Total Tasks</p>
        </div>

        <div
          id="my-tasks-card"
          style={cardStyle}
          onClick={() => history.push("/task-management/tasks")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h2 style={{ color: "#27ae60", fontSize: "28px" }}>
            {taskStats.myTasks}
          </h2>
          <p>My Tasks</p>
        </div>

        {(user.role === "risk_owner" ||
          user.role === "risk_manager" ||
          user.role === "super_admin" ||
          user.role === "root") && (
          <div
            id="approval-card"
            style={cardStyle}
            onClick={() => history.push("/task-management/tasks")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2 style={{ color: "#f39c12", fontSize: "28px" }}>
              {taskStats.pendingApproval}
            </h2>
            <p>Pending Approval</p>
          </div>
        )}

        <div
          style={cardStyle}
          onClick={() => history.push("/task-management/tasks")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h2 style={{ color: "#2ecc71", fontSize: "28px" }}>
            {taskStats.completed}
          </h2>
          <p>Completed Tasks</p>
        </div>
      </div>
      <div style={actionsStyle}>
  <div
    id="task-management-card"
    style={actionCardStyle}
    onClick={() => history.push("/task-management/tasks")}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = "translateY(-3px)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform = "translateY(0)")
    }
  >
    <h3
      style={{
        margin: "0 0 6px 0",
        fontSize: "16px",
        color: "#2c3e50",
      }}
    >
      TASKS
    </h3>
    <p
      style={{
        margin: 0,
        fontSize: "13px",
        color: "#7f8c8d",
      }}
    >
      Manage your tasks from this repository
    </p>
  </div>
      <div
    id="task-management-card"
    style={actionCardStyle}
    onClick={() => history.push("/task-management/departmenttasks")}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = "translateY(-3px)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.transform = "translateY(0)")
    }
  >
    <h3
      style={{
        margin: "0 0 6px 0",
        fontSize: "16px",
        color: "#2c3e50",
      }}
    >
      Department Tasks
    </h3>
    <p
      style={{
        margin: 0,
        fontSize: "13px",
        color: "#7f8c8d",
      }}
    >
      Manage your tasks from this repository
    </p>
  </div>


  
     </div>

     
    </div>

    



  );
};

export default TaskManagementDashboard;
