
export const UserRoles = {
  reader: 'reader',
  editor: 'editor',
};

class ExtensionUserManager {
	port;
	// TODO use dev for now, in the future set in agreement with the environment
	devExtensionId = 'lkdlhhnnkbhhnocdodbeikfboeckpaih';
	prodExtensionId = 'afephghdinbdpfmfdkgbhbolflhnbbdf';
	portName = 'DASHBOARD';
	callbacks;
	
	constructor() {
		this.callbacks = [];
	}
	
	init() {
		this.port = chrome.runtime.connect(this.devExtensionId, {name: this.portName});
		this.port.onMessage.addListener(this.extensionMessageHandler);
	}
	
	addUserUpdatedListener(callback) {
		this.callbacks.push(callback);
	}
	
	extensionMessageHandler = (request, sender, sendResponse) => {
		console.debug('Updated user data');
		if (request.action === 'UPDATE_LOGIN_DATA') {
			const user = request.payload;
			this.onUserDataChanged(user);
		}
	}
	
	onUserDataChanged(user) {
		for (const callback of this.callbacks) {
			callback(user);
		}
	}
	
	getPort() {
		if (!this.port) {
			throw new Error('Port connection with dashboard not initiated');
		}
		return this.port;
	}
	
	pollForUserData() {
		this.getPort().postMessage({
			action: 'GET_LOGIN_DATA',
		});
	}
}

export default ExtensionUserManager;
