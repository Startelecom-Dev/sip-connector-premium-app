export default {
  // clientID: 'fd2ba742-446f-46c5-bbbc-1cad2f34ac3a',
  clientID: "70d02660-aae2-4601-a81d-5cdcde00dec6",

  // wizardUriBase: "http://localhost:8091/wizard/",
  wizardUriBase: "https://legendary-swan-ffc962.netlify.app/wizard/",
  // wizardUriBase: 'https://mypurecloud.github.io/purecloud-premium-app/wizard/',

  // The actual URL of the landing page of your web app or your web site (when wizard has been run).
  // previously - defined as premiumAppURL
  redirectURLOnWizardCompleted: "https://startelecom.ca",
  // redirectURLOnWizardCompleted: "http://localhost:8091/stsc/index.html",
  // redirectURLOnWizardCompleted: "https://legendary-swan-ffc962.netlify.app/stsc/index.html",
  // redirectURLOnWizardCompleted: 'https://mypurecloud.github.io/purecloud-premium-app/premium-app-sample/index.html',
  redirectURLWithParams: true,

  // Genesys Cloud assigned name for the premium app
  // This should match the integration type name of the Premium App
  // NOTE: During initial development please use ‘premium-app-example’.
  //            Once your premium app is approved an integration type will be created
  //            by the Genesys Cloud product team and you can update the name at that time.
  // previously - defined as appName
  premiumAppIntegrationTypeId: "premium-app-example",

  // Optional - Some Premium Applications leverage both a premium app and a premium widget
  premiumWidgetIntegrationTypeId: "premium-widget-example",

  // The minimum permission required for a user to access the Premium App.
  // NOTE: During initial development please use the default permission
  //      'integration:examplePremiumApp:view'. Once your premium app is approved,
  //      the unique integration domain will be generated and this must be updated.
  // previously - defined as viewPermission
  premiumAppViewPermission: "integration:examplePremiumApp:view",
  // Permissions required for running the Wizard App
  // all, premium, wizard, none (default)
  checkInstallPermissions: "none",
  checkProductBYOC: false,

  // Default Values for fail-safe/testing. Shouldn't have to be changed since the app
  // must be able to determine the environment from the query parameter
  // of the integration's URL
  defaultPcEnvironment: "mypurecloud.com",
  defaultLanguage: "en-us",
  // List available language assets - manage pcLangTag with possible formats like: en, en-US, en_US, en-CA, en_CA, ...
  // Values in lower case, using - or no separator
  availableLanguageAssets: {
    "en-us": "English",
    es: "Español",
  },
  enableLanguageSelection: true,

  // The names of the query parameters to check in
  // determining language and environment
  // Ex: www.electric-sheep-app.com?langTag=en-us&environment=mypurecloud.com
  languageQueryParam: "langTag",
  genesysCloudEnvironmentQueryParam: "environment",

  // Enable the optional 'Step 2' in the provisoning process
  // If false, it will not show the page or the step in the wizard
  enableCustomSetupPageBeforeInstall: false,
  // Enable the optional Post Custom Setup module in the install process
  // If true, it will invoke the postCustomSetup module (configure method) after the Genesys Cloud ones (provisioningInfo).
  enableCustomSetupStepAfterInstall: false,

  // Enable the dynamic build of the Install Summary on install.html page
  enableDynamicInstallSummary: true,

  // Displays Text Area for Simplified Installed Data (Summary)
  displaySummarySimplifiedData: true,

  // Allows you to deprovision the installed object by adding the query parameter 'uninstall=true'
  // in the wizard URL. This is merely for testing and should be 'false' in production.
  enableUninstall: true,

  // To be added to names of Genesys Cloud objects created by the wizard
  // prefix: 'PREMIUM_EXAMPLE_',
  prefix: "Startelecom ",

  // These are the Genesys Cloud items that will be added and provisioned by the wizard
  provisioningInfo: {
    role: [
      {
        name: "SIP Admin Role",
        description:
          "Generated role for access to the Startelecom SIP Connector.",
        permissionPolicies: [
          {
            domain: "integration",
            entityName: 'startelecomSipConnector',
            // entityName: "oneView",
            actionSet: ["admin"],
            label:
              "Provides access to the Startelecom SIP Connector",
            allowsConditions: false,
            divisionAware: false,
          },
        ],
      },
    ],
    /*'group': [
            {
                'name': 'Supervisors',
                'description': 'Supervisors have the ability to watch a queue for ACD conversations.',
            }
        ],*/
    "app-instance": [
      {
        name: "SIP Connector",
        // 'url': 'https://genesysappfoundry.github.io/partner-enablement-tools/index.html?language={{pcLangTag}}&environment={{pcEnvironment}}',
        // url: "https://legendary-swan-ffc962.netlify.app/stsc/index.html?language={{pcLangTag}}&environment={{pcEnvironment}}",
        // url: "http://localhost:8091/stsc/index.html?language={{pcLangTag}}&environment={{pcEnvironment}}",
        url: "https://startelecom.ca?language={{pcLangTag}}&environment={{pcEnvironment}}",

        type: "standalone",
        groups: [],
      },
    ],
    "oauth-client": [
      {
        name: "SIP Connector OAuth Client",
        description:
          "Startelecom SIP Connector OAuth Client for API access.",
        roles: ["Startelecom SIP Admin Role"],
        authorizedGrantType: "CLIENT_CREDENTIALS",

        /**
         * This function is for other processing that needs
         * to be done after creating an object.
         * 'finally' is available for all the other
         * resources configured in this config file.
         * NOTE: Finally functions must return a Promise.
         * For Client Credentials, normally it means
         * passing the details to the backend.
         * @param {Object} installedData the Genesys Cloud resource created
         * @returns {Promise}
         */
        finally: function (installedData) {
          return new Promise((resolve, reject) => {
            console.log(
              "Fake Sending Credentials... " + JSON.stringify(installedData)
            );
            setTimeout(() => resolve(), 2000);
          });
        },
      },
    ],
  },

  // These are the necessary permissions that the user running the wizard must have to install or uninstall
  // Add your permissions to one of the modules, to post custom setup, or custom
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

  // These are the necessary scopes that the Vendor Wizard's OAuth Client (defined in Vendor's org) must have to allow the wizard to install or uninstall
  // This is for information only, to make it easier to find what the Vendor Wizard's OAuth Client (Implicit Grant type, Authorization Code Grant type) needs to be set with
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
};
