"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "ws-api" is now active!');
    let disposable = vscode.commands.registerCommand('ws-api.helloWorld', () => {
        const wsFolders = vscode.workspace.workspaceFolders;
        if (!wsFolders) {
            vscode.window.showInformationMessage('no workspace folders');
        }
        else {
            vscode.window.showInformationMessage(`ws api returns ${wsFolders.length} workspace folders`);
            wsFolders.forEach(f => vscode.window.showInformationMessage(f.name));
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map