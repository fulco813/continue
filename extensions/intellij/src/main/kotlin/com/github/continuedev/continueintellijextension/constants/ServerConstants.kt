/**
 * Note: This file is out of sync with the contents of core/util/paths.ts, which we use in VS Code.
 * This is potentially causing JetBrains specific bugs.
 */
package com.github.continuedev.continueintellijextension.constants

import java.nio.file.Files
import java.nio.file.Paths

// Uncertain if this is being used anywhere since we also attempt to write a default config in
// core/util/paths.ts
const val DEFAULT_CONFIG =
    """
{
  "models": [
    {
      "title": "Qwen2",
      "provider": "ollama",
      "model": "qwen2:latest",
      "apiBase": "http://127.0.0.1:11434"
    }
  ],
  "customCommands": [],
  "tabAutocompleteModel": {
    "title": "Starcoder2",
    "provider": "ollama",
    "model": "starcoder2:latest",
    "apiBase": "http://127.0.0.1:11434"
  },
  "contextProviders": [
    {
      "name": "code",
      "params": {}
    },
    {
      "name": "docs",
      "params": {}
    },
    {
      "name": "diff",
      "params": {}
    },
    {
      "name": "terminal",
      "params": {}
    },
    {
      "name": "problems",
      "params": {}
    },
    {
      "name": "folder",
      "params": {}
    },
    {
      "name": "codebase",
      "params": {}
    }
  ],
  "slashCommands": [
    {
      "name": "edit",
      "description": "Edit selected code"
    },
    {
      "name": "comment",
      "description": "Write comments for the selected code"
    },
    {
      "name": "cmd",
      "description": "Generate a shell command"
    },
    {
      "name": "commit",
      "description": "Generate a git commit message"
    }
  ]
}
"""

const val DEFAULT_CONFIG_JS =
    """
function modifyConfig(config) {
  return config;
}
export {
  modifyConfig
};
"""

fun getContinueGlobalPath(): String {
    val continuePath = Paths.get(System.getProperty("user.home"), ".continue")
    if (Files.notExists(continuePath)) {
        Files.createDirectories(continuePath)
    }
    return continuePath.toString()
}

fun getContinueRemoteConfigPath(remoteHostname: String): String {
    val path = Paths.get(getContinueGlobalPath(), ".configs")
    if (Files.notExists(path)) {
        Files.createDirectories(path)
    }
    return Paths.get(path.toString(), remoteHostname).toString()
}

fun getConfigJsonPath(remoteHostname: String? = null): String {
    val path =
        Paths.get(
            if (remoteHostname != null) getContinueRemoteConfigPath(remoteHostname)
            else getContinueGlobalPath(),
            "config.json"
        )
    if (Files.notExists(path)) {
        Files.createFile(path)
        Files.writeString(path, if (remoteHostname == null) DEFAULT_CONFIG else "{}")
    }
    return path.toString()
}

fun getConfigJsPath(remoteHostname: String? = null): String {
    val path =
        Paths.get(
            if (remoteHostname != null) getContinueRemoteConfigPath(remoteHostname)
            else getContinueGlobalPath(),
            "config.js"
        )
    if (Files.notExists(path)) {
        Files.createFile(path)
        Files.writeString(path, DEFAULT_CONFIG_JS)
    }
    return path.toString()
}

fun getSessionsDir(): String {
    val path = Paths.get(getContinueGlobalPath(), "sessions")
    if (Files.notExists(path)) {
        Files.createDirectories(path)
    }
    return path.toString()
}

fun getSessionsListPath(): String {
    val path = Paths.get(getSessionsDir(), "sessions.json")
    if (Files.notExists(path)) {
        Files.createFile(path)
        Files.writeString(path, "[]")
    }
    return path.toString()
}

fun getSessionFilePath(sessionId: String): String {
    val path = Paths.get(getSessionsDir(), "$sessionId.json")
    if (Files.notExists(path)) {
        Files.createFile(path)
        Files.writeString(path, "{}")
    }
    return path.toString()
}
