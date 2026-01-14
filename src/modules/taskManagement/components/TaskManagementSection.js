// import React, { useState, useEffect, useMemo } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import InputField from "../components copy/inputs/InputField";
// import SelectField from "../components copy/inputs/SelectField";
// import TextAreaField from "../components copy/inputs/TextAreaField";
// import taskService from "../services/taskService";
// import riskService from "../services/riskService";
// import {
//   getAllUsers,
//   getDepartments,
// } from "../../departments/services/userService";

// export default function TaskManagement({ riskFormData = {} }) {
//   const history = useHistory();
//   const location = useLocation();
//   const rawUser = sessionStorage.getItem("user");
//   const user = rawUser ? JSON.parse(rawUser) : null;
//   const today = new Date().toISOString().split("T")[0];

//   const [tasks, setTasks] = useState([]);
//   const [risks, setRisks] = useState([]);
//   const [riskOptions, setRiskOptions] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTaskId, setActiveTaskId] = useState(null);
//   const [editingTaskId, setEditingTaskId] = useState(null); // Track edit mode
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);

//  const [showButtons, setShowButtons] = useState(true);

//   const [formData, setFormData] = useState({
//     riskId: riskFormData.riskId || "",
//     organization: user.organization,
//     department: "",
//     employee: "",
//     employeeName: "",
//     description: "",
//     startDate: today,
//     endDate: "",
//   });

//   const STATUS = {
//     PENDING: "Pending",
//     COMPLETED_PENDING: "Completed (Pending Approval)",
//     APPROVED: "Approved",
//   };

//   // --- Fetch Departments, Users, Risks, Tasks ---
//   useEffect(() => {
//     let mounted = true;
//     setIsLoading(true);
//     getDepartments()
//       .then(
//         (d) =>
//           mounted &&
//           setDepartments(
//             Array.isArray(d)
//               ? d.filter((dept) => dept.organization === user.organization)
//               : []
//           )
//       )
//       .catch(console.error)
//       .finally(() => mounted && setIsLoading(false));
//     return () => (mounted = false);
//   }, []);
//   useEffect(() => {
//     let mounted = true;
//     const fetchUsers = async () => {
//       try {
//         const res = await getAllUsers();
//         if (!mounted) return;
//         setUsers(
//           Array.isArray(res)
//             ? res.filter((u) => u.organization === user.organization)
//             : []
//         );
//       } catch (err) {
//         console.error(err);
//         setUsers([]);
//       }
//     };
//     fetchUsers();
//     return () => (mounted = false);
//   }, []);
//   useEffect(() => {
//     let mounted = true;
//     const fetchRisks = async () => {
//       try {
//         const risksData = await riskService.getAllRisks();
//         const allRisks = Array.isArray(risksData)
//           ? risksData.filter((r) => r.organization === user.organization)
//           : [];

//         if (!mounted) return setRisks(allRisks);
//         if (!user) return setRiskOptions([]);
//         if (user.role === "risk_manager") {
//           setRiskOptions(
//             allRisks.map((r) => ({ value: r.riskId, label: r.riskId }))
//           );
//         } else {
//           const deptList = await getDepartments();
//           const userDept = (Array.isArray(deptList) ? deptList : []).find(
//             (d) => String(d._id) === String(user.department)
//           );
//           if (!userDept) return setRiskOptions([]);
//           const deptRisks = allRisks.filter(
//             (r) => r.department === userDept.name
//           );
//           setRiskOptions(
//             deptRisks.map((r) => ({ value: r.riskId, label: r.riskId }))
//           );
//         }
//       } catch (err) {
//         console.error(err);
//         setRisks([]);
//         setRiskOptions([]);
//       }
//     };
//     fetchRisks();
//     return () => (mounted = false);
//   }, [user]);
//   useEffect(() => {
//     let mounted = true;
//     const fetchTasks = async () => {
//       try {
//         const fetchedTasks = await taskService.getAllTasks();
//         if (!mounted) return;
//         setTasks(
//           riskFormData.riskId
//             ? fetchedTasks.filter(
//                 (t) =>
//                   t.riskId === riskFormData.riskId &&
//                   t.organization === user.organization
//               )
//             : fetchedTasks.filter((t) => t.organization === user.organization)
//         );
//       } catch (err) {
//         console.error(err);
//         setTasks([]);
//       }
//     };
//     fetchTasks();
//     return () => (mounted = false);
//   }, [riskFormData.riskId]);

//   // --- Form handlers ---
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (!name) return;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "department")
//       setFormData((prev) => ({ ...prev, department: value, employee: "" }));
//   };
//   const handleDeptChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       employee: "",
//       employeeName: "",
//     }));
//   };

//   const empOptions = useMemo(() => {
//     const dept = departments?.find((d) => d.name === formData.department)?.id;
//     return (users || [])
//       .filter((u) => u.department && String(u.department) === String(dept))
//       .map((u) => ({ value: u._id, label: u.name }));
//   }, [users, departments, formData.department]);

//   // --- Add / Edit Task ---
//   const saveTask = async () => {
//     if (
//       !formData.department ||
//       !formData.startDate ||
//       !formData.endDate
//     ) {
//       alert("Please fill all required fields!");
//       return;
//     }
//     if (new Date(formData.endDate) < new Date(formData.startDate)) {
//       alert("End date cannot be before start date.");
//       return;
//     }

//     const relatedRisk = risks.find((r) => r.riskId === formData.riskId);
//     if (
//       relatedRisk &&
//       (formData.startDate < relatedRisk.startDate ||
//         formData.endDate > relatedRisk.endDate)
//     ) {
//       alert(
//         `Task dates must be within the risk period (${relatedRisk.startDate} → ${relatedRisk.endDate})`
//       );
//       return;
//     }

//     // let employeeId = formData.employee || "";
//     // let employeeName = formData.employeeName || "";
//     // if (employeeId && !employeeName) {
//     //   console.log(employeeId);
//     //   const found = users.find((u) => String(u._id) === String(employeeId));
//     //   employeeName = found ? found.name : "";
//     // }

//     let employeeId = formData.employee || "";
//     let employeeName = formData.employeeName || "";

//     // Auto-assign to department's risk_owner if no employee selected
//     if (!employeeId && formData.department) {
//       const deptId = formData.department;
//       const dept = departments?.find((d) => d.name === deptId)?.id;
//       console.log(dept);
//       const deptRiskOwner = users.find(
//         (u) => String(u.department) === String(dept) && u.role === "risk_owner"
//       );
//       console.log(deptRiskOwner);
//       if (deptRiskOwner) {
//         employeeId = deptRiskOwner._id; // assign ID
//         employeeName = deptRiskOwner.name; // assign name
//         console.log(
//           "Assigned to department risk owner:",
//           employeeName,
//           employeeId
//         );
//       }
//     } else if (employeeId && !employeeName) {
//       console.log(employeeId);
//       const found = users.find((u) => String(u._id) === String(employeeId));
//       employeeName = found ? found.name : "";
//     }

//     setIsSaving(true);
//     try {
//       if (editingTaskId) {
//         const updatedTask = {
//           ...formData,
//           employee: employeeId,
//           employeeName,
//           taskId: editingTaskId,
//         };
//         await taskService.updateTask(editingTaskId, updatedTask);
//         setTasks((prev) =>
//           prev.map((t) => (t.taskId === editingTaskId ? updatedTask : t))
//         );
//       } else {
//         const newTaskId = `T-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
//         const newTask = {
//           ...formData,
//           employee: employeeId,
//           employeeName,
//           taskId: newTaskId,
//           status: STATUS.PENDING,
//         };
//         await taskService.saveTask(newTask);
//         // Immediately add to local state instead of refetching
//         setTasks((prev) => {
//           const updatedTasks = [...prev, newTask];
//           return riskFormData.riskId
//             ? updatedTasks.filter(
//                 (t) =>
//                   t.riskId === riskFormData.riskId &&
//                   t.organization === user.organization
//               )
//             : updatedTasks.filter((t) => t.organization === user.organization);
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       alert(`Failed to ${editingTaskId ? 'update' : 'add'} task.`);
//       return;
//     } finally {
//       setIsSaving(false);
//     }

//     setFormData({
//       riskId: riskFormData.riskId || "",
//       department: "",
//       employee: "",
//       employeeName: "",
//       description: "",
//       startDate: today,
//       endDate: "",
//     });
//     setIsModalOpen(false);
//     setEditingTaskId(null);
//   };

//   // --- Delete Task ---
//   const deleteTask = async (taskId) => {
//     if (!window.confirm("Are you sure you want to delete this task?")) return;
//     try {
//       await taskService.deleteTask(taskId);
//       setTasks((prev) => prev.filter((t) => t.taskId !== taskId));
//       if (activeTaskId === taskId) setActiveTaskId(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete task.");
//     }
//   };

//   // --- Mark Complete ---
//   const markTaskComplete = async (taskId) => {
//     const taskToUpdate = tasks.find((t) => t.taskId === taskId);
//     if (!taskToUpdate) return;
//     const updatedTask = {
//       ...taskToUpdate,
//       status: ["risk_manager", "risk_owner"].includes(user?.role)
//         ? STATUS.APPROVED
//         : STATUS.COMPLETED_PENDING,
//     };
//     await taskService.updateTask(taskId, updatedTask);
//     setTasks((prev) =>
//       prev.map((t) => (t.taskId === taskId ? updatedTask : t))
//     );
//   };

//   // --- Edit Handler ---
//   const editTask = (task) => {
//     setFormData({
//       riskId: task.riskId,
//       department: task.department,
//       employee: task.employee,
//       employeeName: task.employeeName,
//       description: task.description,
//       startDate: task.startDate,
//       endDate: task.endDate,
//     });
//     setEditingTaskId(task.taskId);
//     setIsModalOpen(true);
//   };

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const [year, month, day] = dateStr.split("T")[0].split("-");
//     return `${day}-${month}-${year}`;
//   };

//   const buttonStyle = {
//     minWidth: "50px",
//     padding: "4px 8px",
//     borderRadius: "5px",
//     border: "none",
//     fontSize: "13px",
//     color: "#fff",
//     cursor: "pointer",
//   };

//   return (
//     <>

//      <button
//         style={{
//           position: "sticky",
//           top: "0",
//           margin: "10px",
//           padding: "10px 24px",
//           borderRadius: "8px",
//           background: "#005FCC",
//           border: "none",
//           color: "#fff",
//           fontWeight: "500",
//           fontSize: "14px",
//           cursor: "pointer",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//           transition: "transform 0.3s ease, opacity 0.3s ease",
//           zIndex: 999,
//           transform: showButtons ? "translateY(0)" : "translateY(-100%)",
//           opacity: showButtons ? 1 : 0,
//         }}
//         onClick={() => history.push("/task-management")}
//       >
//         ← Back to Dashboard{" "}
//       </button>
//     <div style={{ padding: "30px", maxWidth: "1000px", margin: "auto" }}>
//       <h1 style={{ textAlign: "center",fontWeight: 500,color: "#000", fontSize: "30px" }}>Manage your tasks</h1>
//       <p
//         style={{
//           textAlign: "center",
//           color: "#7f8c8d",
//           fontSize: "16px",
//           marginBottom: "15px",
//         }}
//       >
//         Tasks to treat identified Risks.
//       </p>

//       {isLoading ? (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//           <p>Loading tasks...</p>
//         </div>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr",
//             gap: "12px",
//           }}
//         >
//           {tasks
//             .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
//             .map((task) => {
//             const isActive = activeTaskId === task.taskId;
//             return (
//               <div
//                 key={task.taskId}
//                 style={{
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   padding: "12px",
//                   cursor: "pointer",
//                   background: isActive ? "#f0f8ff" : "#fff",
//                   boxShadow: isActive
//                     ? "0 4px 10px rgba(0,0,0,0.15)"
//                     : "0 1px 3px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s",
//                 }}
//                 onClick={() => setActiveTaskId(isActive ? null : task.taskId)}
//               >
//                 <h4 style={{ margin: 0, fontWeight: 600 , color: "black"}}>
//                   {task.description}
//                 </h4>
//                 {isActive && (
//                   <div
//                     style={{
//                       marginTop: "10px",
//                       fontSize: "14px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     <p>
//                       <strong>Assignee:</strong> {task.employee || "—"}
//                     </p>
//                     <p>
//                       <strong>Start:</strong> {formatDate(task.startDate)}
//                     </p>
//                     <p>
//                       <strong>End:</strong> {formatDate(task.endDate)}
//                     </p>
//                     <p>
//                       <strong>Status:</strong> {task.status}
//                     </p>

//                     <div
//                       style={{
//                         display: "flex",
//                         gap: "8px",
//                         flexWrap: "wrap",
//                         marginTop: "6px",
//                       }}
//                     >
//                       {task.status === STATUS.PENDING &&
//                         String(task.employee) === String(user?.id) && (
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               markTaskComplete(task.taskId);
//                             }}
//                             style={{ ...buttonStyle, background: "#2ecc71" }}
//                           >
//                             ✅ Mark Complete
//                           </button>
//                         )}
//                       {task.status === STATUS.COMPLETED_PENDING &&
//                         ["risk_manager", "risk_owner"].includes(user?.role) && (
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               markTaskComplete(task.taskId);
//                             }}
//                             style={{ ...buttonStyle, background: "#f39c12" }}
//                           >
//                             ✅ Approve
//                           </button>
//                         )}
//                       {task.status === STATUS.APPROVED && (
//                         <span>✅ Approved</span>
//                       )}

//                       {["risk_owner", "risk_manager"].includes(user?.role) && (
//                         <>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               editTask(task);
//                             }}
//                             style={{ ...buttonStyle, background: "#3498db" }}
//                           >
//                             ✏️ Edit
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               deleteTask(task.taskId);
//                             }}
//                             style={{ ...buttonStyle, background: "#e74c3c" }}
//                           >
//                             🗑️ Delete
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {user && ["risk_owner", "risk_manager"].includes(user.role) && (
//         <div style={{ marginTop: "20px" }}>
//           <button
//             style={{
//               background: "#3498db",
//               color: "#fff",
//               border: "none",
//               padding: "12px 20px",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//             onClick={() => setIsModalOpen(true)}
//           >
//             ➕ Add Task
//           </button>
//         </div>
//       )}

//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999,
//             padding: "20px",
//             boxSizing: "border-box",
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "25px",
//               borderRadius: "10px",
//               width: "100%",
//               maxWidth: "450px",
//               boxSizing: "border-box",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
//             }}
//           >
//             <h3 style={{ marginBottom: "15px",fontWeight: "700", color: "#000"}}>
//               {editingTaskId ? "Edit Task" : "Add Task"}
//             </h3>
//             <div style={{ display: "grid", gap: "12px" }}>
//               {location.pathname === "/risk-assessment/tasks" && (
//                 <SelectField
//                   label="Related Risk"
//                   name="riskId"
//                   value={formData.riskId}
//                   onChange={handleInputChange}
//                   options={riskOptions}
//                   placeholder="Select related risk"
//                 />
//               )}
//               <SelectField
//                 label="Department"
//                 name="department"
//                 value={formData.department}
//                 onChange={handleDeptChange}
//                 options={departments.map((d) => ({
//                   value: d._id,
//                   label: d.name,
//                 }))}
//                 placeholder="Select department"
//               />
//               <SelectField
//                 label="Assign To"
//                 name="employee"
//                 value={formData.employee}
//                 onChange={handleInputChange}
//                 options={empOptions}
//                 placeholder="Select employee"
//               />
//               <TextAreaField
//                 label="Task Description / Person"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Describe the mitigation task..."
//                 rows={2}
//               />
//               <InputField
//                 label="Start Date"
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleInputChange}
//                 min={today}
//               />
//               <InputField
//                 label="End Date"
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleInputChange}
//                 min={formData.startDate || today}
//                 max={riskFormData.deadlineDate || undefined}
//               />
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "10px",
//                   justifyContent: "flex-end",
//                   marginTop: "10px",
//                 }}
//               >
//                 <button
//                   style={{
//                     padding: "8px 16px",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     background: "#ccc",
//                   }}
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setEditingTaskId(null);
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   style={{
//                     padding: "8px 16px",
//                     borderRadius: "5px",
//                     cursor: isSaving ? "not-allowed" : "pointer",
//                     background: isSaving ? "#ccc" : "#3498db",
//                     color: "#fff",
//                   }}
//                   onClick={saveTask}
//                   disabled={isSaving}
//                 >
//                   {isSaving ? "Saving..." : (editingTaskId ? "Update Task" : "Save Task")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }




import React, { useState, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import InputField from "../components copy/inputs/InputField";
import SelectField from "../components copy/inputs/SelectField";
import TextAreaField from "../components copy/inputs/TextAreaField";
import taskService from "../services/taskService";
import riskService from "../services/riskService";
import {
  getAllUsers,
  getDepartments,
} from "../../departments/services/userService";

export default function TaskManagement({ riskFormData = {} }) {
  const history = useHistory();
  const location = useLocation();
  const rawUser = sessionStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;
  const today = new Date().toISOString().split("T")[0];

  const [tasks, setTasks] = useState([]);
  const [risks, setRisks] = useState([]);
  const [riskOptions, setRiskOptions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  // Filter and Pagination state
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const STATUS = {
    PENDING: "Pending",
    COMPLETED_PENDING: "Completed (Pending Approval)",
    APPROVED: "Approved",
  };

  const STATUS_OPTIONS = [
    { value: "all", label: "All Status" },
    { value: "Pending", label: "Pending" },
    { value: "Completed (Pending Approval)", label: "Completed (Pending Approval)" },
    { value: "Approved", label: "Approved" },
  ];

  // Filtered and paginated tasks
  const filteredTasks = useMemo(() => {
    let filtered = tasks;
    
    if (filterStatus !== "all") {
      filtered = filtered.filter(task => task.status === filterStatus);
    }
    
    return filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }, [tasks, filterStatus]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // --- Fetch Departments, Users, Risks, Tasks ---
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    getDepartments()
      .then(
        (d) =>
          mounted &&
          setDepartments(
            Array.isArray(d)
              ? d.filter((dept) => dept.organization === user.organization)
              : []
          )
      )
      .catch(console.error)
      .finally(() => mounted && setIsLoading(false));
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        if (!mounted) return;
        setUsers(
          Array.isArray(res)
            ? res.filter((u) => u.organization === user.organization)
            : []
        );
      } catch (err) {
        console.error(err);
        setUsers([]);
      }
    };
    fetchUsers();
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchRisks = async () => {
      try {
        const risksData = await riskService.getAllRisks();
        const allRisks = Array.isArray(risksData)
          ? risksData.filter((r) => r.organization === user.organization)
          : [];

        if (!mounted) return setRisks(allRisks);
        if (!user) return setRiskOptions([]);
        if (user.role === "risk_manager") {
          setRiskOptions(
            allRisks.map((r) => ({ value: r.riskId, label: r.riskId }))
          );
        } else {
          const deptList = await getDepartments();
          const userDept = (Array.isArray(deptList) ? deptList : []).find(
            (d) => String(d._id) === String(user.department)
          );
          if (!userDept) return setRiskOptions([]);
          const deptRisks = allRisks.filter(
            (r) => r.department === userDept.name
          );
          setRiskOptions(
            deptRisks.map((r) => ({ value: r.riskId, label: r.riskId }))
          );
        }
      } catch (err) {
        console.error(err);
        setRisks([]);
        setRiskOptions([]);
      }
    };
    fetchRisks();
    return () => (mounted = false);
  }, [user]);

  useEffect(() => {
    let mounted = true;
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await taskService.getAllTasks();
        if (!mounted) return;
        setTasks(
          riskFormData.riskId
            ? fetchedTasks.filter(
                (t) =>
                  t.riskId === riskFormData.riskId &&
                  t.organization === user.organization
              )
            : fetchedTasks.filter((t) => t.organization === user.organization)
        );
      } catch (err) {
        console.error(err);
        setTasks([]);
      }
    };
    fetchTasks();
    return () => (mounted = false);
  }, [riskFormData.riskId]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus]);

  const [formData, setFormData] = useState({
    riskId: riskFormData.riskId || "",
    organization: user.organization,
    department: "",
    employee: "",
    employeeName: "",
    description: "",
    startDate: today,
    endDate: "",
  });

  // --- Form handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!name) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "department")
      setFormData((prev) => ({ ...prev, department: value, employee: "" }));
  };

  const handleDeptChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      employee: "",
      employeeName: "",
    }));
  };

  // FIXED: Get department name from department ID for edit mode
  const getDepartmentNameById = (deptId) => {
    if (!deptId || !departments.length) return "";
    const dept = departments.find(d => String(d._id) === String(deptId) || d.name === deptId);
    return dept ? dept.name : deptId;
  };

  // FIXED: Get employee name by ID and update formData
  const getEmployeeNameById = (empId) => {
    if (!empId || !users.length) return "";
    const emp = users.find(u => String(u._id) === String(empId));
    return emp ? emp.name : "";
  };

  const empOptions = useMemo(() => {
    const dept = departments?.find((d) => d.name === formData.department)?.id;
    return (users || [])
      .filter((u) => u.department && String(u.department) === String(dept))
      .map((u) => ({ value: u._id, label: u.name }));
  }, [users, departments, formData.department]);

  // --- FIXED Edit Handler ---
  const editTask = (task) => {
    // Get department name (handles both ID and name storage)
    const departmentName = getDepartmentNameById(task.department);
    
    // Get employee name if only ID is stored
    const employeeName = task.employeeName || getEmployeeNameById(task.employee);
    
    setFormData({
      riskId: task.riskId || "",
      department: departmentName,  // Use department name for select field
      employee: task.employee || "",
      employeeName: employeeName,
      description: task.description || "",
      startDate: task.startDate || today,
      endDate: task.endDate || "",
    });
    setEditingTaskId(task.taskId);
    setIsModalOpen(true);
  };

  // --- Add / Edit Task (FIXED for edit mode) ---
  const saveTask = async () => {
    if (
      !formData.department ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert("Please fill all required fields!");
      return;
    }
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      alert("End date cannot be before start date.");
      return;
    }

    const relatedRisk = risks.find((r) => r.riskId === formData.riskId);
    if (
      relatedRisk &&
      (formData.startDate < relatedRisk.startDate ||
        formData.endDate > relatedRisk.endDate)
    ) {
      alert(
        `Task dates must be within the risk period (${relatedRisk.startDate} → ${relatedRisk.endDate})`
      );
      return;
    }

    let employeeId = formData.employee || "";
    let employeeName = formData.employeeName || "";

    // Convert department name back to ID if needed for storage
    const deptId = departments.find(d => d.name === formData.department)?._id || formData.department;

    // Auto-assign to department's risk_owner if no employee selected
    if (!employeeId && formData.department) {
      const dept = departments?.find((d) => d.name === formData.department)?.id;
      const deptRiskOwner = users.find(
        (u) => String(u.department) === String(dept) && u.role === "risk_owner"
      );
      if (deptRiskOwner) {
        employeeId = deptRiskOwner._id;
        employeeName = deptRiskOwner.name;
      }
    } else if (employeeId && !employeeName) {
      const found = users.find((u) => String(u._id) === String(employeeId));
      employeeName = found ? found.name : "";
    }

    setIsSaving(true);
    try {
      if (editingTaskId) {
        const updatedTask = {
          ...formData,
          department: deptId,  // Store department ID consistently
          employee: employeeId,
          employeeName,
          taskId: editingTaskId,
        };
        await taskService.updateTask(editingTaskId, updatedTask);
        setTasks((prev) =>
          prev.map((t) => (t.taskId === editingTaskId ? updatedTask : t))
        );
      } else {
        const newTaskId = `T-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newTask = {
          ...formData,
          department: deptId,  // Store department ID consistently
          employee: employeeId,
          employeeName,
          taskId: newTaskId,
          status: STATUS.PENDING,
        };
        await taskService.saveTask(newTask);
        setTasks((prev) => {
          const updatedTasks = [...prev, newTask];
          return riskFormData.riskId
            ? updatedTasks.filter(
                (t) =>
                  t.riskId === riskFormData.riskId &&
                  t.organization === user.organization
              )
            : updatedTasks.filter((t) => t.organization === user.organization);
        });
      }
    } catch (err) {
      console.error(err);
      alert(`Failed to ${editingTaskId ? 'update' : 'add'} task.`);
      return;
    } finally {
      setIsSaving(false);
    }

    // Reset form
    setFormData({
      riskId: riskFormData.riskId || "",
      department: "",
      employee: "",
      employeeName: "",
      description: "",
      startDate: today,
      endDate: "",
    });
    setIsModalOpen(false);
    setEditingTaskId(null);
  };

  // --- Delete Task ---
  const deleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await taskService.deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t.taskId !== taskId));
      if (activeTaskId === taskId) setActiveTaskId(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete task.");
    }
  };

  // --- Mark Complete ---
  const markTaskComplete = async (taskId) => {
    const taskToUpdate = tasks.find((t) => t.taskId === taskId);
    if (!taskToUpdate) return;
    const updatedTask = {
      ...taskToUpdate,
      status: ["risk_manager", "risk_owner"].includes(user?.role)
        ? STATUS.APPROVED
        : STATUS.COMPLETED_PENDING,
    };
    await taskService.updateTask(taskId, updatedTask);
    setTasks((prev) =>
      prev.map((t) => (t.taskId === taskId ? updatedTask : t))
    );
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("T")[0].split("-");
    return `${day}-${month}-${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case STATUS.PENDING: return "#f39c12";
      case STATUS.COMPLETED_PENDING: return "#f1c40f";
      case STATUS.APPROVED: return "#27ae60";
      default: return "#95a5a6";
    }
  };

  const getStatusBadge = (status) => (
    <span
      style={{
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        color: "#fff",
        background: getStatusColor(status),
      }}
    >
      {status}
    </span>
  );

  return (
    <>
      <button
        style={{
          position: "sticky",
          top: "0",
          margin: "10px",
          padding: "10px 24px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #005FCC 0%, #007BFF 100%)",
          border: "none",
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,95,204,0.3)",
          transition: "all 0.3s ease",
          zIndex: 999,
          transform: showButtons ? "translateY(0)" : "translateY(-100%)",
          opacity: showButtons ? 1 : 0,
        }}
        onClick={() => history.push("/task-management")}
        onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
        onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
      >
        ← Back to Dashboard
      </button>

      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: "700", 
            color: "#1a1a1a", 
            marginBottom: "8px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Task Management
          </h1>
          <p style={{ color: "#64748b", fontSize: "18px", margin: 0 }}>
            Manage tasks to mitigate identified risks effectively
          </p>
        </div>

        {/* Filters and Stats */}
        <div style={{ 
          background: "#f8fafc", 
          padding: "24px", 
          borderRadius: "16px", 
          marginBottom: "32px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            {/* Filter */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>Filter by Status:</label>
              <select
                name="filterStatus"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  fontSize: "14px",
                  minWidth: "200px",
                  cursor: "pointer"
                }}
              >
                {STATUS_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Stats */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "700", color: "#3b82f6" }}>
                  {tasks.length}
                </div>
                <div style={{ fontSize: "12px", color: "#64748b" }}>Total Tasks</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "700", color: "#10b981" }}>
                  {filteredTasks.length}
                </div>
                <div style={{ fontSize: "12px", color: "#64748b" }}>Filtered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        {isLoading ? (
          <div style={{ 
            textAlign: "center", 
            padding: "60px 20px",
            color: "#64748b"
          }}>
            <div style={{ 
              width: "48px", 
              height: "48px", 
              border: "4px solid #e5e7eb", 
              borderTop: "4px solid #3b82f6",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 20px"
            }} />
            <p style={{ fontSize: "16px", margin: 0 }}>Loading tasks...</p>
          </div>
        ) : (
          <>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gap: "20px",
              marginBottom: "24px"
            }}>
              {currentTasks.map((task) => {
                const isActive = activeTaskId === task.taskId;
                return (
                  <div
                    key={task.taskId}
                    style={{
                      border: `1px solid ${isActive ? "#3b82f6" : "#e5e7eb"}`,
                      borderRadius: "16px",
                      padding: "24px",
                      cursor: "pointer",
                      background: isActive ? "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)" : "#fff",
                      boxShadow: isActive
                        ? "0 10px 25px rgba(59,130,246,0.2)"
                        : "0 2px 10px rgba(0,0,0,0.05)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isActive ? "translateY(-4px)" : "none",
                      position: "relative",
                      overflow: "hidden"
                    }}
                    onClick={() => setActiveTaskId(isActive ? null : task.taskId)}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {/* Status Badge */}
                    <div style={{ position: "absolute", top: "16px", right: "16px" }}>
                      {getStatusBadge(task.status)}
                    </div>
                    
                    {/* Content */}
                    <h4 style={{ 
                      margin: "0 0 16px 0", 
                      fontSize: "18px", 
                      fontWeight: "600", 
                      color: "#1f2937",
                      lineHeight: "1.4"
                    }}>
                      {task.description}
                    </h4>
                    
                    {isActive && (
                      <div style={{ opacity: 0, animation: "fadeIn 0.3s forwards" }}>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "12px",
                          marginBottom: "20px"
                        }}>
                          <div>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Assignee</div>
                            <div style={{ fontWeight: "500", color: "#1f2937" }}>
                              {task.employeeName || task.employee || "—"}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Start Date</div>
                            <div style={{ fontWeight: "500", color: "#1f2937" }}>
                              {formatDate(task.startDate)}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>End Date</div>
                            <div style={{ fontWeight: "500", color: "#1f2937" }}>
                              {formatDate(task.endDate)}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>Department</div>
                            <div style={{ fontWeight: "500", color: "#1f2937" }}>
                              {task.department || "—"}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div style={{
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap"
                        }}>
                          {task.status === STATUS.PENDING &&
                            String(task.employee) === String(user?.id) && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markTaskComplete(task.taskId);
                                }}
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: "8px",
                                  border: "none",
                                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                  boxShadow: "0 2px 8px rgba(16,185,129,0.3)"
                                }}
                              >
                                ✅ Mark Complete
                              </button>
                            )}
                          {task.status === STATUS.COMPLETED_PENDING &&
                            ["risk_manager", "risk_owner"].includes(user?.role) && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markTaskComplete(task.taskId);
                                }}
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: "8px",
                                  border: "none",
                                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                  boxShadow: "0 2px 8px rgba(245,158,11,0.3)"
                                }}
                              >
                                ✅ Approve
                              </button>
                            )}
                          {task.status === STATUS.APPROVED && (
                            <div style={{
                              padding: "8px 16px",
                              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                              color: "#fff",
                              borderRadius: "8px",
                              fontWeight: "500",
                              fontSize: "14px"
                            }}>
                              ✅ Approved
                            </div>
                          )}

                          {["risk_owner", "risk_manager"].includes(user?.role) && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  editTask(task);
                                }}
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: "8px",
                                  border: "1px solid #3b82f6",
                                  background: "transparent",
                                  color: "#3b82f6",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  transition: "all 0.2s"
                                }}
                              >
                                ✏️ Edit
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteTask(task.taskId);
                                }}
                                style={{
                                  padding: "8px 16px",
                                  borderRadius: "8px",
                                  border: "none",
                                  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                                  color: "#fff",
                                  fontWeight: "500",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                  boxShadow: "0 2px 8px rgba(239,68,68,0.3)"
                                }}
                              >
                                🗑️ Delete
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginTop: "40px",
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px"
              }}>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    background: currentPage === 1 ? "#f3f4f6" : "#fff",
                    color: currentPage === 1 ? "#9ca3af" : "#374151",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    fontWeight: "500"
                  }}
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      background: currentPage === number ? "#3b82f6" : "#fff",
                      color: currentPage === number ? "#fff" : "#374151",
                      cursor: "pointer",
                      fontWeight: currentPage === number ? "700" : "500",
                      minWidth: "44px"
                    }}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    background: currentPage === totalPages ? "#f3f4f6" : "#fff",
                    color: currentPage === totalPages ? "#9ca3af" : "#374151",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                    fontWeight: "500"
                  }}
                >
                  Next
                </button>
                
                <div style={{ color: "#6b7280", fontSize: "14px", marginLeft: "16px" }}>
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}

            {/* No tasks message */}
            {currentTasks.length === 0 && !isLoading && (
              <div style={{
                textAlign: "center",
                padding: "80px 20px",
                color: "#6b7280"
              }}>
                <div style={{
                  fontSize: "64px",
                  marginBottom: "20px",
                  opacity: "0.5"
                }}>
                  📋
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px", color: "#374151" }}>
                  No tasks found
                </h3>
                <p style={{ margin: 0, fontSize: "16px" }}>
                  {filterStatus === "all" ? "No tasks available." : `No tasks match the selected filter: "${filterStatus}".`}
                </p>
              </div>
            )}
          </>
        )}

        {/* Add Task Button */}
        {user && ["risk_owner", "risk_manager"].includes(user.role) && (
          <div style={{ 
            textAlign: "center", 
            marginTop: "40px",
            position: "sticky",
            bottom: "20px",
            zIndex: 100
          }}>
            <button
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onClick={() => setIsModalOpen(true)}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)";
              }}
            >
              ➕ Add New Task
            </button>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "20px",
              backdropFilter: "blur(4px)"
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "32px",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                maxHeight: "90vh",
                overflowY: "auto",
                animation: "slideUp 0.3s ease"
              }}
            >
              <h3 style={{ 
                marginBottom: "24px",
                fontSize: "24px",
                fontWeight: "700", 
                color: "#1f2937"
              }}>
                {editingTaskId ? "Edit Task" : "Add New Task"}
              </h3>
              <div style={{ display: "grid", gap: "16px" }}>
                {location.pathname === "/risk-assessment/tasks" && (
                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>Related Risk</label>
                    <select
                      name="riskId"
                      value={formData.riskId}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        fontSize: "14px"
                      }}
                    >
                      <option value="">Select related risk</option>
                      {riskOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>Department *</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleDeptChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      background: "#fff",
                      fontSize: "14px"
                    }}
                  >
                    <option value="">Select department</option>
                    {departments.map((d) => (
                      <option key={d._id} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>Assign To</label>
                  <select
                    name="employee"
                    value={formData.employee}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      background: "#fff",
                      fontSize: "14px"
                    }}
                  >
                    <option value="">Select employee (auto-assigns to risk owner)</option>
                    {empOptions.map((emp) => (
                      <option key={emp.value} value={emp.value}>
                        {emp.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>Task Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the mitigation task in detail..."
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid #d1d5db",
                      background: "#fff",
                      fontSize: "14px",
                      fontFamily: "inherit",
                      resize: "vertical"
                    }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      min={today}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        fontSize: "14px"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px", display: "block" }}>End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      min={formData.startDate || today}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        background: "#fff",
                        fontSize: "14px"
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "flex-end",
                    marginTop: "8px"
                  }}
                >
                  <button
                    style={{
                      padding: "12px 24px",
                      borderRadius: "10px",
                      border: "1px solid #d1d5db",
                      background: "#fff",
                      color: "#374151",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingTaskId(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      padding: "12px 24px",
                      borderRadius: "10px",
                      cursor: isSaving ? "not-allowed" : "pointer",
                      background: isSaving 
                        ? "#f3f4f6" 
                        : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      color: "#fff",
                      border: "none",
                      fontWeight: "600",
                      transition: "all 0.2s",
                      boxShadow: isSaving ? "none" : "0 4px 12px rgba(59,130,246,0.3)"
                    }}
                    onClick={saveTask}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <span style={{ marginRight: "8px" }}>⏳</span>
                        Saving...
                      </>
                    ) : editingTaskId ? (
                      "Update Task"
                    ) : (
                      "Create Task"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
