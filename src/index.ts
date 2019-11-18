#!/usr/bin/env node
import * as core from "@actions/core";
import * as fs from "fs";
try {
  const prefix = core.getInput("prefix", { required: true });
  if (prefix) {
    const fileName = "package.json";
    const packageValues = JSON.parse(fs.readFileSync(fileName).toString());
    const version = packageValues.version + prefix;
    console.log("prefix version: %s",version);
    fs.writeFileSync(
      fileName,
      JSON.stringify(
        { ...packageValues, version },
        undefined,
        "  "
      )
    );
  }
} catch (e) {
  console.error(e);
  process.exit(-1);
}
