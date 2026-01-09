import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import taskService from "../services/taskService";

const MyTasks = () => {
  const history = useHistory();
  const rawUser = sessionStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  const [tasks, setTasks] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("all");
  const TASKS_PER_PAGE = 10;

  const STATUS = {
    PENDING: "Pending",
    COMPLETED_PENDING: "Completed (Pending Approval)",
    APPROVED: "Approved",
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowButtons(false);
      else setShowButtons(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch tasks
  useEffect(() => {
    let controller = new AbortController();
    let timeoutId;

    const fetchTasks = async () => {
      if (!user) {
        setTasks([]);
        return;
      }

      try {
        timeoutId = setTimeout(() => controller.abort(), 10000);

        const allTasks = await Promise.race([
          taskService.getAllTasks(),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 10000)
          ),
        ]);

        clearTimeout(timeoutId);

        const userTasks = allTasks.filter(
          (t) =>
            String(t.employee) === String(user.name || user._id) &&
            t.organization === user.organization
        );
        setTasks(userTasks);
      } catch (error) {
        console.log("API failed:", error.message);
        setTasks([]);
      }
    };

    fetchTasks();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [user]);

  const markTaskComplete = async (taskId) => {
    const taskToUpdate = tasks.find((t) => t.taskId === taskId);
    if (!taskToUpdate) return;

    const updatedTask = { ...taskToUpdate, status: STATUS.COMPLETED_PENDING };
    try {
      await taskService.updateTask(taskId, updatedTask);
      setTasks((prev) =>
        prev.map((t) => (t.taskId === taskId ? updatedTask : t))
      );
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Stats
  const pendingCount = tasks.filter((t) => t.status === STATUS.PENDING).length;
  const completedCount = tasks.filter(
    (t) => t.status === STATUS.COMPLETED_PENDING
  ).length;
  const approvedCount = tasks.filter((t) => t.status === STATUS.APPROVED).length;
  const totalCount = tasks.length;

  // Filtering & pagination
  const filteredTasks = tasks.filter(
    (t) => filterStatus === "all" || t.status === filterStatus
  );
  const totalPages = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);
  const currentTasks = filteredTasks.slice(
    (currentPage - 1) * TASKS_PER_PAGE,
    currentPage * TASKS_PER_PAGE
  );

  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Please login
      </div>
    );
  }

  // Styles
  const statCardStyle = {
  background: "#ffffff",
  padding: "0.45rem 0.8rem",   // tighter padding
  borderRadius: "6px",
  width: "130px",              // FIXED small width
  height: "64px",              // compact height
  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.15s ease",
};
  return (
    <>
      {/* Back Button */}
    {/* <button
  style={{
    position: "fixed",
    top: "90px",
    left: "50%",
    transform: showButtons
      ? "translateX(-50%) translateY(0)"
      : "translateX(-50%) translateY(-120%)",
    zIndex: 999,
    padding: "10px 18px",
    background: "#005FCC",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    whiteSpace: "nowrap",
    opacity: showButtons ? 1 : 0,
    transition: "all 0.3s ease",
  }}
  onClick={() => history.push("/risk-assessment")}
>
  ← Back to Dashboard
</button> */}


      <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
<div
  style={{
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
  }}
>
  <button
    onClick={() => history.push("/risk-assessment")}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "8px 14px",
      background: "#005FCC",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 600,
    }}
  >
    ← Back to Dashboard
  </button>
</div>



        {/* Header */}
        <h1
          style={{
            textAlign: "center",
            color: "#1f2937",
            fontSize: "2.4rem",
            fontWeight: 800,
            letterSpacing: "0.5px",
            marginBottom: "1rem",
          }}
        >
          My Tasks
        </h1>

        {/* Stats Cards */}
        <div
  style={{
    display: "flex",
    gap: "0.8rem",  // slightly smaller gap
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  }}
>
      {/* Pending */}
  <div
    style={{ ...statCardStyle, borderLeft: "4px solid #ff6b6b" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    <h2 style={{ color: "#ff6b6b", margin: "0 0 4px 0", fontSize: "20px", fontWeight: 700 }}>
      {pendingCount}
    </h2>
    <p style={{ color: "#7f8c8d", margin: 0, fontSize: "12px", fontWeight: 600 }}>
      Pending
    </p>
  </div>

         {/* Completed */}
  <div
    style={{ ...statCardStyle, borderLeft: "4px solid #f9d423" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    <h2 style={{ color: "#f9d423", margin: "0 0 4px 0", fontSize: "20px", fontWeight: 700 }}>
      {completedCount}
    </h2>
    <p style={{ color: "#7f8c8d", margin: 0, fontSize: "12px", fontWeight: 600 }}>
      Completed
    </p>
  </div>
 {/* Approved */}
  <div
    style={{ ...statCardStyle, borderLeft: "4px solid #2ecc71" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    <h2 style={{ color: "#2ecc71", margin: "0 0 4px 0", fontSize: "20px", fontWeight: 700 }}>
      {approvedCount}
    </h2>
    <p style={{ color: "#7f8c8d", margin: 0, fontSize: "12px", fontWeight: 600 }}>
      Approved
    </p>
  </div>

           {/* Total */}
  <div
    style={{ ...statCardStyle, borderLeft: "4px solid #3498db" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
            <h2 style={{ color: "#3498db", margin: "0 0 4px 0", fontSize: "20px", fontWeight: 700 }}>
      {totalCount}
    </h2>
    <p style={{ color: "#7f8c8d", margin: 0, fontSize: "12px", fontWeight: 600 }}>
      Total
    </p>
  </div>
</div>

        {/* Filter */}
        <div
          style={{
            background: "#f8f9fa",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <label style={{ fontWeight: 600 }}>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              padding: "0.75rem 1rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: "white",
              fontSize: "1rem",
            }}
          >
            <option value="all">All Tasks ({totalCount})</option>
            <option value={STATUS.PENDING}>Pending ({pendingCount})</option>
            <option value={STATUS.COMPLETED_PENDING}>
              Completed ({completedCount})
            </option>
            <option value={STATUS.APPROVED}>Approved ({approvedCount})</option>
          </select>
        </div>

        {/* Table */}
        <div
          style={{
            overflowX: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "white",
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "1rem", background: "#f8f9fa", fontWeight: 600 }}>
                  Description
                </th>
                <th style={{ padding: "1rem", background: "#f8f9fa", fontWeight: 600 }}>
                  Start Date
                </th>
                <th style={{ padding: "1rem", background: "#f8f9fa", fontWeight: 600 }}>
                  End Date
                </th>
                <th style={{ padding: "1rem", background: "#f8f9fa", fontWeight: 600 }}>
                  Status
                </th>
                <th style={{ padding: "1rem", background: "#f8f9fa", fontWeight: 600 }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((task) => (
                <tr key={task.taskId} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "1rem" }}>{task.description || "—"}</td>
                  <td style={{ padding: "1rem" }}>
                    {task.startDate ? new Date(task.startDate).toLocaleDateString() : "—"}
                  </td>
                  <td style={{ padding: "1rem" }}>
                    {task.endDate ? new Date(task.endDate).toLocaleDateString() : "—"}
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <span
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        background:
                          task.status === STATUS.PENDING
                            ? "#fff3cd"
                            : task.status === STATUS.COMPLETED_PENDING
                            ? "#cfe2ff"
                            : "#d1e7dd",
                        color:
                          task.status === STATUS.PENDING
                            ? "#856404"
                            : task.status === STATUS.COMPLETED_PENDING
                            ? "#084298"
                            : "#0f5132",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                      }}
                    >
                      {task.status || "—"}
                    </span>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    {task.status === STATUS.PENDING &&
                    String(task.employee) === String(user.name || user._id) ? (
                      <button
                        style={{
                          padding: "0.5rem 1rem",
                          background: "#28a745",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                        onClick={() => markTaskComplete(task.taskId)}
                      >
                        ✅ Mark Complete
                      </button>
                    ) : task.status === STATUS.COMPLETED_PENDING ? (
                      <span style={{ color: "#28a745", fontWeight: 600 }}>
                        ⏳ Waiting Approval
                      </span>
                    ) : (
                      <span style={{ color: "#28a745", fontWeight: 600 }}>✅ Approved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "2rem",
              flexWrap: "wrap",
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  border: pageNum === currentPage ? "none" : "1px solid #ddd",
                  background: pageNum === currentPage ? "#005FCC" : "white",
                  color: pageNum === currentPage ? "white" : "#495057",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            ))}
            <span style={{ color: "#7f8c8d", padding: "0.75rem" }}>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        )}

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#6b7280" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}></div>
            <h3 style={{ color: "#374151", marginBottom: "0.5rem" }}>No tasks found</h3>
            <p>Try adjusting the status filter above</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyTasks;