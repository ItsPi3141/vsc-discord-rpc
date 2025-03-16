import * as vscode from "vscode";
import { ActivityType, Client } from "minimal-discord-rpc";
import { getAsset } from "./assets";

interface Activity {
	state?: string;
	details?: string;
	timestamps?: {
		start?: number | Date;
		end?: number | Date;
	};
	assets?: {
		large_image?: string;
		large_text?: string;
		small_image?: string;
		small_text?: string;
	};
	type?:
		| ActivityType.Playing
		| ActivityType.Listening
		| ActivityType.Watching
		| ActivityType.Competing;
}

const throttleTime = 10000; // 10 seconds
let lastActivityChangeTime = 0;
const throttledSetActivity = () => {
	const now = Date.now();
	if (now - lastActivityChangeTime < throttleTime) {
		setTimeout(
			throttledSetActivity,
			throttleTime + 250 - (now - lastActivityChangeTime),
		);
		return;
	}
	lastActivityChangeTime = now;
	client.setActivity(activityData);
};

const setIdle = () => {
	Object.assign(activityData, {
		assets: {
			large_image: getAsset({ name: "vscode" }),
		},
	});
	activityData.details = undefined;
	throttledSetActivity();
};
const setFile = (fileName: string, line: number, col: number) => {
	Object.assign(activityData, {
		details: `${fileName}:${line}:${col}`,
		assets: {
			large_image: getAsset({ fileName }),
			small_image: getAsset({ name: "vscode" }),
		},
	});
	throttledSetActivity();
};

export const client = new Client({
	clientId: "1350606494349131836",
});
const activityData: Activity = {
	timestamps: {
		start: Date.now(),
	},
	type: ActivityType.Playing,
};

client.on("ready", () => {
	setIdle();
});
client.login();

vscode.window.onDidChangeActiveTextEditor((editor) => {
	if (!editor) return;
	const doc = editor?.document;
	// Ignore notebook cells, they have their own events
	if (editor.document.uri.scheme === "vscode-notebook-cell") return;
	setFile(
		doc.fileName.split("/").pop()?.split("\\").pop() || "Untitled",
		editor.selection.start.line + 1,
		editor.selection.start.character + 1,
	);
});

vscode.window.onDidChangeActiveNotebookEditor((editor) => {
	const doc = editor?.notebook;
});

vscode.window.onDidChangeTextEditorSelection((editor) => {
	const doc = editor?.textEditor.document;
	setFile(
		doc.fileName.split("/").pop()?.split("\\").pop() || "Untitled",
		editor.textEditor.selection.start.line + 1,
		editor.textEditor.selection.start.character + 1,
	);
});
