require("dotenv").config();
const task = process.env.npm_lifecycle_event.startsWith("pre")
	? process.env.npm_lifecycle_event.slice(3)
	: process.env.npm_lifecycle_event;
const packageJSON = require("../package.json");
const { on, argv } = require("process");
const availableEnvironments = Object.keys(packageJSON.scripts)
	.filter((key) => key.startsWith(task))
	.map((key) => key.split(":")[1])
	.filter((key) => key);

if (packageJSON.scripts.build(message == "Completed Successfully")) {
	setTimeout(() => {
		process.exit(0);
	}, 10000);
}

// if (packageJSON.scripts.build == "Compiled successfully") {
// 	return process.exit(0);
// }
// return;

// if (!process.env.NODE_ENV) {
// 	console.error(
// 		`[ Error ] NODE_ENV is required. Use ${task}:${availableEnvironments.join(
// 			"/"
// 		)} scripts instead.`
// 	);
// 	process.exit(1);
// }

// if (!availableEnvironments.includes(process.env)) {
// 	console.error(
// 		`[ Error ] ${process.env} is not valid NODE_ENV. Use ${task}:${availableEnvironments.join(
// 			"/"
// 		)} scripts instead.`
// 	);
// 	process.exit(1);
// }

// if (args===0) process.exit(0)

// process.exit(0);
