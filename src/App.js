import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import HamburgerMenu from "./components/navigations/HamburgerMenu";
import ISO_27001 from "./modules/dashboard/FrameWorks/ISO_27001";
import ISO_27701 from "./modules/dashboard/FrameWorks/ISO_27701";
import Policies from "./modules/dashboard/Template/Policies";
import Procedures from "./modules/dashboard/Template/Procedures";

import Dashboard from "./modules/dashboard/Dashboard";
import LoginPage from "./modules/departments/pages/loginPage";
import DemoPage from "./modules/departments/pages/DemoPage";
import ChangePasswordPage from "./modules/departments/pages/ChangePasswordPage";
import DashboardLoggedIn from "./modules/dashboard/DashboardLoggedIn";

import RiskAssessment from "./modules/riskAssesment/pages/RiskAssessment";
import AddRisk from "./modules/riskAssesment/pages/AddRisk";
import TemplatesPage from "./modules/riskAssesment/pages/TemplatesPage";
import SavedRisksPage from "./modules/riskAssesment/pages/SavedRisksPage";

import Documentation from "./modules/documentation/pages/Documentation";
import SoaPage from "./modules/documentation/pages/SoaPage";
import ControlsPage from "./modules/documentation/pages/ControlPage";
import ReportsPage from "./modules/documentation/pages/ReportPage";
import DocumentationSettingsPage from "./modules/documentation/pages/DocumentationSettingsPage";
import MLD from "./modules/documentation/pages/MLD";
import SoAMLD from "./modules/documentation/pages/SoAMLD";

import GapAssessmentDashboard from "./modules/gapAssessment/pages/GapAssessment";
import NewAssessment from "./modules/gapAssessment/pages/NewAssessment";
import AssessmentHistory from "./modules/gapAssessment/pages/AssessmentHistory";

import TaskManagementDashboard from "./modules/taskManagement/pages/TaskManagementDashboard";
import TaskManagementPage from "./modules/taskManagement/pages/TaskManagementPage";

import MyTasks from "./modules/riskAssesment/pages/MyTasks";
import { HelmetProvider } from "react-helmet-async";
import AboutPage from "./static-pages/about";
import BlogPage from "./static-pages/blog";
import CareersPage from "./static-pages/careers";
import PrivacyPage from "./static-pages/privacy";
import TermsPage from "./static-pages/terms";
import SecurityPage from "./static-pages/security";

import "./styles/GlobalStyles.css";
import departmenttask from "./modules/taskManagement/pages/departmenttask";
import IntegrationsDashboard from "./modules/integrations/integrationdashboard";

import { CONTROL_MAPPING } from "./modules/integrations/controldescriptionconstants";
import { calculateMetric } from "./modules/integrations/metricsUtils";
import Evidence_Modal from "./modules/integrations/evidencemodal";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const RoleBasedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && allowedRoles.includes(user.role) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  const HEADER_HEIGHT = 64; // must match HamburgerMenu height

  return (
    <div className="app">
      {!isDashboard && <HamburgerMenu />}

      <main
        className="main-content"
        style={{
          paddingTop: !isDashboard ? HEADER_HEIGHT : 0,
          minHeight: "100vh",
          boxSizing: "border-box"
        }}
      >
        {children}
      </main>
    </div>
  );
};


function App() {
  return (
    <HelmetProvider>
    <Router>
      <Switch>
        {/* LOGIN ROUTE - STANDALONE LAYOUT (no hamburger menu) */}
        <Route exact path="/login" component={LoginPage} />
        <Route path="/demo" component={DemoPage} />

        {/* STATIC PAGES - PUBLIC */}
        
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        
        <Route path="/careers" component={CareersPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/security" component={SecurityPage} />

        {/* FRAMEWORK ROUTES - PUBLIC */}
        <Route path="/iso-27001" component={ISO_27001} />
        <Route path="/iso-27701" component={ISO_27701} />

        {/* TEMPLATE ROUTES - PROTECTED (logged-in only) */}
        <Route path="/policies" component={Policies} />
        <Route path="/procedures" component={Procedures} />
        
        {/* ALL OTHER ROUTES WITH HAMBURGER + MAIN LAYOUT */}
        <Route>
          <AppLayout>
            <Switch>
              {/* <Route exact path="/" component={Dashboard} /> */}
              <Route exact path="/" render={() => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user ? <DashboardLoggedIn /> : <Dashboard />;
}} />

              <Route
                exact
                path="/change-password"
                component={ChangePasswordPage}
              />

              <ProtectedRoute
                exact
                path="/risk-assessment"
                component={RiskAssessment}
              />
              <ProtectedRoute path="/risk-assessment/add" component={AddRisk} />
              <RoleBasedRoute
                path="/risk-assessment/saved"
                component={SavedRisksPage}
                allowedRoles={[
                  "risk_owner",
                  "risk_identifier",
                  "risk_manager",
                  "super_admin",
                  "root",
                ]}
              />
              <RoleBasedRoute
                path="/risk-assessment/soa"
                component={SoaPage}
                allowedRoles={[
                  "risk_owner",
                  "risk_identifier",
                  "risk_manager",
                  "super_admin",
                  "root",
                ]}
              />

              <Route
                path="/risk-assessment/templates"
                component={TemplatesPage}
              />
              <ProtectedRoute
                path="/risk-assessment/my-tasks"
                component={MyTasks}
              />
              <ProtectedRoute path="/risk-assessment/mld" component={SoAMLD} />

              <ProtectedRoute
                exact
                path="/documentation"
                component={Documentation}
              />
              <ProtectedRoute
                path="/risk-assessment/controls"
                component={ControlsPage}
              />
              <ProtectedRoute
                path="/documentation/reports"
                component={ReportsPage}
              />
              <ProtectedRoute
                path="/documentation/settings"
                component={DocumentationSettingsPage}
              />
              <ProtectedRoute path="/documentation/mld" component={MLD} />

              <ProtectedRoute
                exact
                path="/gap-assessment"
                component={GapAssessmentDashboard}
              />
              <ProtectedRoute
                exact
                path="/gap-assessment/new"
                component={NewAssessment}
              />
              <ProtectedRoute
                exact
                path="/gap-assessment/history"
                component={AssessmentHistory}
              />
              <ProtectedRoute
                exact
                path="/task-management"
                component={TaskManagementDashboard}
              />

              <ProtectedRoute
                exact
                path="/task-management/tasks"
                component={TaskManagementPage}
              />
              <ProtectedRoute
                exact
                path="/task-management/departmenttasks"
                component={departmenttask}
              />

                 <ProtectedRoute
                exact
                path="/integrations"
                component={IntegrationsDashboard}
              />
                
                     <ProtectedRoute
                exact
                path="./evidencemodal"
                component={Evidence_Modal}
              />
                           <ProtectedRoute
                exact
                path="./constants"
                component={CONTROL_MAPPING}
              />

                                <ProtectedRoute
                exact
                path="./metricsUtils"
                component={calculateMetric}
              />



              {/* Catch all - redirect to home */}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
    </HelmetProvider>
  );
}

export default App;
