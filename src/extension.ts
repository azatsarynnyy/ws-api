import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "ws-api" is now active!');

	let disposable = vscode.commands.registerCommand('ws-api.helloWorld', () => {
		const wsFolders = vscode.workspace.workspaceFolders;
		if (!wsFolders) {
			vscode.window.showInformationMessage('no workspace folders');
		} else {
			vscode.window.showInformationMessage(`ws api returns ${wsFolders.length} workspace folders`);
			wsFolders.forEach(f => vscode.window.showInformationMessage(f.name));
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
