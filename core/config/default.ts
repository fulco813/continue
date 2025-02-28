import {
  ContextProviderWithParams,
  ModelDescription,
  SerializedContinueConfig,
  SlashCommandDescription,
} from "../";

export const DEFAULT_CHAT_MODEL_CONFIG: ModelDescription = {
  title: "Qwen2",
  provider: "ollama",
  model: "qwen2:latest",
  apiBase: "http://127.0.0.1:11434"
};

export const DEFAULT_AUTOCOMPLETE_MODEL_CONFIG: ModelDescription = {
  title: "Starcoder2",
  provider: "ollama",
  model: "starcoder2:latest",
  apiBase: "http://127.0.0.1:11434"
};

export const FREE_TRIAL_MODELS: ModelDescription[] = [
  // {
  //   title: "Claude 3.5 Sonnet (Free Trial)",
  //   provider: "free-trial",
  //   model: "claude-3-5-sonnet-latest",
  //   systemMessage:
  //     "You are an expert software developer. You give helpful and concise responses.",
  // },
  // {
  //   title: "GPT-4o (Free Trial)",
  //   provider: "free-trial",
  //   model: "gpt-4o",
  //   systemMessage:
  //     "You are an expert software developer. You give helpful and concise responses.",
  // },
  // {
  //   title: "Llama3.1 70b (Free Trial)",
  //   provider: "free-trial",
  //   model: "llama3.1-70b",
  //   systemMessage:
  //     "You are an expert software developer. You give helpful and concise responses.",
  // },
  // {
  //   title: "Codestral (Free Trial)",
  //   provider: "free-trial",
  //   model: "codestral-latest",
  //   systemMessage:
  //     "You are an expert software developer. You give helpful and concise responses.",
  // },
];

export const defaultContextProvidersVsCode: ContextProviderWithParams[] = [
  { name: "code", params: {} },
  { name: "docs", params: {} },
  { name: "diff", params: {} },
  { name: "terminal", params: {} },
  { name: "problems", params: {} },
  { name: "folder", params: {} },
  { name: "codebase", params: {} },
];

export const defaultContextProvidersJetBrains: ContextProviderWithParams[] = [
  { name: "diff", params: {} },
  { name: "folder", params: {} },
  { name: "codebase", params: {} },
];

export const defaultSlashCommandsVscode: SlashCommandDescription[] = [
  {
    name: "share",
    description: "Export the current chat session to markdown",
  },
  {
    name: "cmd",
    description: "Generate a shell command",
  },
  {
    name: "commit",
    description: "Generate a git commit message",
  },
];

export const defaultSlashCommandsJetBrains = [
  {
    name: "share",
    description: "Export the current chat session to markdown",
  },
  {
    name: "commit",
    description: "Generate a git commit message",
  },
];

export const defaultConfig: SerializedContinueConfig = {
  models: [
    {
      "title": "Qwen2",
      "provider": "ollama",
      "model": "qwen2_7b_prompt",
      "apiBase": "http://10.36.152.23:11434"
    }
  ],
  tabAutocompleteModel: {
    "title": "Starcoder2",
    "provider": "ollama",
    "model": "starcoder2_15b_prompt",
    "apiBase": "http://10.36.152.23:11434"
  },
  contextProviders: defaultContextProvidersVsCode,
  slashCommands: defaultSlashCommandsVscode,
  data: [],
};

export const defaultConfigJetBrains: SerializedContinueConfig = {
  models: [
    {
      "title": "Qwen2",
      "provider": "ollama",
      "model": "qwen2_7b_prompt",
      "apiBase": "http://10.36.152.23:11434"
    }
  ],
  tabAutocompleteModel: {
    "title": "Starcoder2",
    "provider": "ollama",
    "model": "starcoder2_15b_prompt",
    "apiBase": "http://10.36.152.23:11434"
  },
  contextProviders: defaultContextProvidersJetBrains,
  slashCommands: defaultSlashCommandsJetBrains,
  data: [],
};
