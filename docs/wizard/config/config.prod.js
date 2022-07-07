export default {
  clientID: "70d02660-aae2-4601-a81d-5cdcde00dec6",
  wizardUriBase: "https://sipconn.startelecom.ca/install/",
  redirectURLOnWizardCompleted: "https://sipconn.startelecom.ca",
  redirectURLWithParams: false,
  premiumAppIntegrationTypeId: "premium-app-example",
  premiumAppViewPermission: "integration:examplePremiumApp:view",
  checkInstallPermissions: "none",
  checkProductBYOC: false,
  defaultPcEnvironment: "mypurecloud.com",
  defaultLanguage: "en-us",
  availableLanguageAssets: {
    "en-us": "English",
    es: "Español",
  },
  enableLanguageSelection: true,
  languageQueryParam: "langTag",
  genesysCloudEnvironmentQueryParam: "environment",
  enableCustomSetupPageBeforeInstall: false,
  enableCustomSetupStepAfterInstall: false,
  enableDynamicInstallSummary: true,
  displaySummarySimplifiedData: true,
  enableUninstall: false,
  prefix: "Startelecom ",
  provisioningInfo: {
    role: [
      {
        name: "SIP Admin Role",
        description:
          "Generated role for access to the Startelecom SIP Connector.",
        permissionPolicies: [
          {
            domain: "integration",
            entityName: "startelecomSipConnector",
            actionSet: ["admin"],
            label: "Provides access to the Startelecom SIP Connector",
            allowsConditions: false,
            divisionAware: false,
          },
        ],
      },
    ],
    "app-instance": [
      {
        name: "SIP Connector",
        url: "https://sipconn.startelecom.ca?language={{pcLangTag}}&environment={{pcEnvironment}}",
        type: "standalone",
        groups: [],
      },
    ],
    "oauth-client": [
      {
        name: "SIP Connector OAuth Client",
        description: "Startelecom SIP Connector OAuth Client for API access.",
        roles: ["SIP Admin Role"],
        authorizedGrantType: "CLIENT_CREDENTIALS",
        finally: function (installedData) {
          return new Promise((resolve, reject) => {
            console.log("Installed data: " + JSON.stringify(installedData));
            resolve();
          });
        },
      },
    ],
  },

  installPermissions: {
    custom: [],
    wizard: ["integrations:integration:view", "integrations:integration:edit"],
    postCustomSetup: [],
    role: [
      "authorization:role:view",
      "authorization:role:add",
      "authorization:grant:add",
    ],
    group: ["directory:group:add"],
    "app-instance": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
    ],
    "widget-instance": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
    ],
    "interaction-widget": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
    ],
    "oauth-client": [
      "authorization:role:view",
      "oauth:client:view",
      "oauth:client:add",
      "oauth:client:edit",
    ],
    "widget-deployment": [
      "widgets:deployment:view",
      "widgets:deployment:add",
      "widgets:deployment:edit",
    ],
    "open-messaging": [
      "messaging:integration:view",
      "messaging:integration:add",
      "messaging:integration:edit",
    ],
    "ws-data-actions": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
      "integrations:action:add",
      "integrations:action:edit",
    ],
    "gc-data-actions": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
      "integrations:action:add",
      "integrations:action:edit",
    ],
    "data-table": ["architect:datatable:view", "architect:datatable:add"],
    "byoc-cloud-trunk": ["telephony:plugin:all"],
    audiohook: [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
    ],
    "event-bridge": [
      "integrations:integration:view",
      "integrations:integration:add",
      "integrations:integration:edit",
    ],
  },
  uninstallPermissions: {
    custom: [],
    wizard: [],
    postCustomSetup: [],
    role: ["authorization:role:delete"],
    group: ["directory:group:delete"],
    "app-instance": ["integrations:integration:delete"],
    "widget-instance": ["integrations:integration:delete"],
    "interaction-widget": ["integrations:integration:delete"],
    "oauth-client": ["oauth:client:edit", "oauth:client:delete"],
    "widget-deployment": ["widgets:deployment:delete"],
    "open-messaging": ["messaging:integration:delete"],
    "ws-data-actions": ["integrations:integration:delete"],
    "gc-data-actions": ["integrations:integration:delete"],
    "data-table": ["architect:datatable:delete"],
    "byoc-cloud-trunk": ["telephony:plugin:all"],
    audiohook: ["integrations:integration:delete"],
    "event-bridge": ["integrations:integration:delete"],
  },

  installScopes: {
    custom: [],
    wizard: ["user-basic-info", "integrations"],
    postCustomSetup: [],
    role: ["authorization"],
    group: ["groups"],
    "app-instance": ["integrations"],
    "widget-instance": ["integrations"],
    "interaction-widget": ["integrations"],
    "oauth-client": ["authorization:readonly", "user-basic-info", "oauth"],
    "widget-deployment": ["widgets"],
    "open-messaging": ["messaging"],
    "ws-data-actions": ["integrations"],
    "gc-data-actions": ["integrations"],
    "data-table": ["architect"],
    "byoc-cloud-trunk": ["telephony", "organization:readonly"],
    audiohook: ["integrations"],
    "event-bridge": ["integrations"],
  },
  uninstallScopes: {
    custom: [],
    wizard: [],
    postCustomSetup: [],
    role: ["authorization"],
    group: ["groups"],
    "app-instance": ["integrations"],
    "widget-instance": ["integrations"],
    "interaction-widget": ["integrations"],
    "oauth-client": ["oauth"],
    "widget-deployment": ["widgets"],
    "open-messaging": ["messaging"],
    "ws-data-actions": ["integrations"],
    "gc-data-actions": ["integrations"],
    "data-table": ["architect"],
    "byoc-cloud-trunk": ["telephony"],
    audiohook: ["integrations"],
    "event-bridge": ["integrations"],
  },
}
