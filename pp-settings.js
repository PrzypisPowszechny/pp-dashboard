const process = require('process');
let settingsLogged = false;


exports.loadPPSettings = (environment, argv) => {
  const env = environment || process.env;
  const mode = argv && argv.mode;

  const settings = {
    DEV: getDev(env, mode),
    API_URL: getApi(env, mode) + '/api',
    SITE_URL: getApi(env, mode) + '/site',
    GA_ID: getGaId(env, mode),
    SENTRY_DSN: getSentryDSN(env, mode),
		FIREBASE_CONFIG: getFirebaseConfig(env, mode),
  };

  if (!settingsLogged) {
    settingsLogged = true;
    console.info(`PPSettings loaded from env:\n`, settings, `\n`);
  }
  return settings;
}

function fromEnv(env, key) {
  if (fromEnv._keys === undefined) {
    fromEnv._keys = {}
  }
  if (fromEnv._keys[key] === undefined) {
    console.info(`loading env.${key}`);
    fromEnv._keys[key] = env[key] !== undefined ? toLowerIfString(env[key]) : null;
  }
  return fromEnv._keys[key];
}

function toLowerIfString(val) {
  return val === 'string' ? val.toLowerCase() : val;
}

function getDev(env, mode) {
  if (getDev._value === undefined) {
    switch (fromEnv(env, 'PP_DEV') || null) {
      case 'false':
      case '0':
        getDev._value = false;
        break;
      case 'true':
      case '1':
      case null:
        getDev._value = true;
        break;
      default:
        console.warn(`Ignoring unknown value of PP_DEV! To disable PP_DEV flag set it to 'false' or '0'.`);
        getDev._value = true;
    }
  }
  return getDev._value;
}


function getApi(env, mode) {
  switch (fromEnv(env, 'PP_API')) {
    case 'local':
    case 'localhost':
        return "http://localhost:8000"
    // Alternative localhost port - why not use it when running tests to avoid port clash with dev API?
    case 'local-alt':
    case 'localhost-alt':
        return "http://localhost:8080"
    case 'pp':
      return "https://app.przypispowszechny.pl"
    case 'devdeploy1':
    default:
      return "https://devdeploy1.przypispowszechny.pl"
  }
}


const GA_ID_PROD = 'UA-123054125-1';
const GA_ID_DEV = 'UA-123054125-2';

function getGaId(env, mode) {
  const dev = getDev(env, mode);
  return dev ? GA_ID_DEV : GA_ID_PROD;
}

const SENTRY_DSN_DEV = 'https://3166a82a0a684e459e01b69db6d4db61@sentry.io/1305142';
const SENTRY_DSN_PROD = 'https://d2b3d8c96d404a44b41d9334e1b6733d@sentry.io/1305137';

function getSentryDSN(env, mode) {
  const dev = getDev(env, mode);
	return dev ? SENTRY_DSN_DEV : SENTRY_DSN_PROD;
}

function getFirebaseConfig(env, mode) {
	if(getDev(env, mode)) {
		return {
			apiKey: "AIzaSyBQI1cpPnedideTHom0fcsShPxHT5JKVEE",
			authDomain: "pp-dashboard-devdeploy1.firebaseapp.com",
			databaseURL: "https://pp-dashboard-devdeploy1.firebaseio.com",
			projectId: "pp-dashboard-devdeploy1",
			storageBucket: "pp-dashboard-devdeploy1.appspot.com",
			messagingSenderId: "208342594562"
		}
	} else {
		return {
			apiKey: "AIzaSyDTtpM_kVIqfuRTS-xuEehHdDRaIV6gKks",
			authDomain: "pp-dashboard-prod.firebaseapp.com",
			databaseURL: "https://pp-dashboard-prod.firebaseio.com",
			projectId: "pp-dashboard-prod",
			storageBucket: "pp-dashboard-prod.appspot.com",
			messagingSenderId: "399739907075"
		}
	}
}
