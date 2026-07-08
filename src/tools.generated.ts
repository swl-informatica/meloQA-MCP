// AUTO-GENERATED — do not edit by hand. Run `npm run gen` to regenerate.
// Source: spec/openapi.json
//
// 83 tools generated from the meloQA Public API v1 spec.

import type { ToolDef, HttpRequest } from "./types.js";

export const tools: ToolDef[] = [
  {
    name: "bug_environments_list",
    description: "List environments for a project\n\nTag: Bug Environments",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter environments by project"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bug-environments" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "bug_folders_create",
    description: "Create bug folder\n\nTag: Bug Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "parentId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/bug-folders" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "bug_folders_delete",
    description: "Delete bug folder\n\nTag: Bug Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/bug-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "bug_folders_get",
    description: "Get bug folder by ID\n\nTag: Bug Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/bug-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "bug_folders_list",
    description: "List bug folders\n\nTag: Bug Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter folders by project"
        },
        "parentId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by parent folder"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bug-folders" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.parentId !== undefined && input.parentId !== null) query["parentId"] = String(input.parentId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "bug_folders_update",
    description: "Update bug folder\n\nTag: Bug Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug Folder ID"
        },
        "name": {
          "type": "string"
        },
        "parentId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/bug-folders/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "bug_priorities_list",
    description: "List all bug priority levels\n\nTag: Bug Priorities",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bug-priorities" };
    return req;
  },
  },
  {
    name: "bug_statuses_list",
    description: "List all bug statuses\n\nTag: Bug Statuses",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bug-statuses" };
    return req;
  },
  },
  {
    name: "bug_types_list",
    description: "List bug types for a project\n\nTag: Bug Types",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter bug types by project"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bug-types" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "bugs_attachments_create",
    description: "Create bug attachment (returns presigned upload URL)\n\nTag: Bug Attachments\n\nCria o registro do anexo (uploaded=false) e retorna uma presigned URL S3 (PUT, 300s). Faça o PUT do arquivo na `uploadUrl` e depois confirme com PATCH /v1/bugs/:id/attachments/:attachmentId.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        },
        "fileName": {
          "type": "string"
        },
        "size": {
          "type": "integer",
          "description": "Tamanho em bytes"
        },
        "type": {
          "type": "string",
          "description": "MIME type"
        },
        "md5": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "fileName",
        "size",
        "type",
        "md5"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: `/v1/bugs/${encodeURIComponent(String(input.id))}/attachments` };
    const body: Record<string, unknown> = {};
    if (input.fileName !== undefined) body["fileName"] = input.fileName;
    if (input.size !== undefined) body["size"] = input.size;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.md5 !== undefined) body["md5"] = input.md5;
    req.body = body;
    return req;
  },
  },
  {
    name: "bugs_attachments_delete",
    description: "Delete bug attachment\n\nTag: Bug Attachments\n\nRemove o anexo (registro + arquivo no S3).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/bugs/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "bugs_attachments_list",
    description: "List bug attachments\n\nTag: Bug Attachments\n\nLista os anexos do bug. Itens com `uploaded=true` trazem `downloadUrl` (presigned, 300s).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/bugs/${encodeURIComponent(String(input.id))}/attachments` };
    return req;
  },
  },
  {
    name: "bugs_attachments_update",
    description: "Confirm bug attachment upload\n\nTag: Bug Attachments\n\nMarca o anexo como enviado (`uploaded=true`) após o PUT no S3.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/bugs/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "bugs_create",
    description: "Create bug\n\nTag: Bugs",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "description": {
          "type": "string"
        },
        "projectPlatformId": {
          "type": "string",
          "format": "uuid"
        },
        "environmentId": {
          "type": "string",
          "format": "uuid"
        },
        "type": {
          "type": "string"
        },
        "priority": {
          "type": "string",
          "enum": [
            "FIRST",
            "SECOND",
            "THIRD",
            "FOURTH",
            "FIFTH"
          ],
          "description": "FIRST=Critical, SECOND=High, THIRD=Medium, FOURTH=Low, FIFTH=Trivial"
        },
        "assignedTo": {
          "type": "string",
          "format": "uuid"
        },
        "folderId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId",
        "statusId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/bugs" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.projectPlatformId !== undefined) body["projectPlatformId"] = input.projectPlatformId;
    if (input.environmentId !== undefined) body["environmentId"] = input.environmentId;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.priority !== undefined) body["priority"] = input.priority;
    if (input.assignedTo !== undefined) body["assignedTo"] = input.assignedTo;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    req.body = body;
    return req;
  },
  },
  {
    name: "bugs_delete",
    description: "Delete bug\n\nTag: Bugs",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/bugs/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "bugs_get",
    description: "Get bug by ID\n\nTag: Bugs",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/bugs/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "bugs_list",
    description: "List bugs\n\nTag: Bugs\n\nAt least one query parameter is required: **projectId** or **folderId**.",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by project. At least one of projectId or folderId is required."
        },
        "folderId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by folder. At least one of projectId or folderId is required."
        }
      },
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/bugs" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.folderId !== undefined && input.folderId !== null) query["folderId"] = String(input.folderId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "bugs_update",
    description: "Update bug\n\nTag: Bugs",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Bug ID"
        },
        "name": {
          "type": "string"
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "projectPlatformId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "environmentId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "type": {
          "type": [
            "string",
            "null"
          ]
        },
        "priority": {
          "type": "string",
          "enum": [
            "FIRST",
            "SECOND",
            "THIRD",
            "FOURTH",
            "FIFTH"
          ],
          "description": "FIRST=Critical, SECOND=High, THIRD=Medium, FOURTH=Low, FIFTH=Trivial"
        },
        "assignedTo": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "folderId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/bugs/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.projectPlatformId !== undefined) body["projectPlatformId"] = input.projectPlatformId;
    if (input.environmentId !== undefined) body["environmentId"] = input.environmentId;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.priority !== undefined) body["priority"] = input.priority;
    if (input.assignedTo !== undefined) body["assignedTo"] = input.assignedTo;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    req.body = body;
    return req;
  },
  },
  {
    name: "cycle_folders_create",
    description: "Create cycle folder\n\nTag: Cycle Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "parentId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/cycle-folders" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "cycle_folders_delete",
    description: "Delete cycle folder\n\nTag: Cycle Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/cycle-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "cycle_folders_get",
    description: "Get cycle folder by ID\n\nTag: Cycle Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/cycle-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "cycle_folders_list",
    description: "List cycle folders\n\nTag: Cycle Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter folders by project"
        },
        "parentId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by parent folder"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/cycle-folders" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.parentId !== undefined && input.parentId !== null) query["parentId"] = String(input.parentId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "cycle_folders_update",
    description: "Update cycle folder\n\nTag: Cycle Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle Folder ID"
        },
        "name": {
          "type": "string"
        },
        "parentId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/cycle-folders/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "cycle_statuses_list",
    description: "List all cycle statuses\n\nTag: Cycle Statuses",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/cycle-statuses" };
    return req;
  },
  },
  {
    name: "cycles_create",
    description: "Create cycle\n\nTag: Cycles",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "description": {
          "type": "string"
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "folderId": {
          "type": "string",
          "format": "uuid"
        },
        "startAt": {
          "type": "string",
          "format": "date-time"
        },
        "endAt": {
          "type": "string",
          "format": "date-time"
        },
        "type": {
          "type": "string",
          "enum": [
            "MANY",
            "ONE"
          ]
        },
        "observations": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/cycles" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    if (input.startAt !== undefined) body["startAt"] = input.startAt;
    if (input.endAt !== undefined) body["endAt"] = input.endAt;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.observations !== undefined) body["observations"] = input.observations;
    req.body = body;
    return req;
  },
  },
  {
    name: "cycles_delete",
    description: "Delete cycle\n\nTag: Cycles",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/cycles/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "cycles_get",
    description: "Get cycle by ID\n\nTag: Cycles",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/cycles/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "cycles_list",
    description: "List cycles\n\nTag: Cycles\n\nAt least one query parameter is required: **projectId** or **folderId**.",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by project. At least one of projectId or folderId is required."
        },
        "folderId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by folder. At least one of projectId or folderId is required."
        }
      },
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/cycles" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.folderId !== undefined && input.folderId !== null) query["folderId"] = String(input.folderId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "cycles_update",
    description: "Update cycle\n\nTag: Cycles",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Cycle ID"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "folderId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "startAt": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time"
        },
        "endAt": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time"
        },
        "type": {
          "type": "string",
          "enum": [
            "MANY",
            "ONE"
          ]
        },
        "observations": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/cycles/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    if (input.startAt !== undefined) body["startAt"] = input.startAt;
    if (input.endAt !== undefined) body["endAt"] = input.endAt;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.observations !== undefined) body["observations"] = input.observations;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_attachments_create",
    description: "Create execution attachment (returns presigned upload URL)\n\nTag: Execution Attachments\n\nCria o registro do anexo (uploaded=false) e retorna uma presigned URL S3 (PUT, 300s). Faça o PUT do arquivo na `uploadUrl` e depois confirme com PATCH /v1/executions/:id/attachments/:attachmentId.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        },
        "fileName": {
          "type": "string"
        },
        "size": {
          "type": "integer",
          "description": "Tamanho em bytes"
        },
        "type": {
          "type": "string",
          "description": "MIME type"
        },
        "md5": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "fileName",
        "size",
        "type",
        "md5"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: `/v1/executions/${encodeURIComponent(String(input.id))}/attachments` };
    const body: Record<string, unknown> = {};
    if (input.fileName !== undefined) body["fileName"] = input.fileName;
    if (input.size !== undefined) body["size"] = input.size;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.md5 !== undefined) body["md5"] = input.md5;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_attachments_delete",
    description: "Delete execution attachment\n\nTag: Execution Attachments\n\nRemove o anexo (registro + arquivo no S3).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/executions/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "executions_attachments_list",
    description: "List execution attachments\n\nTag: Execution Attachments\n\nLista os anexos da execução. Itens com `uploaded=true` trazem `downloadUrl` (presigned, 300s).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/executions/${encodeURIComponent(String(input.id))}/attachments` };
    return req;
  },
  },
  {
    name: "executions_attachments_update",
    description: "Confirm execution attachment upload\n\nTag: Execution Attachments\n\nMarca o anexo como enviado (`uploaded=true`) após o PUT no S3.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/executions/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "executions_create",
    description: "Create execution\n\nTag: Executions\n\nThe `state` field is system-managed and is silently ignored if sent in the body. Use `/v1/executions-run`, `/v1/executions-pause` and `/v1/executions-finish` to drive transitions.",
    inputSchema: {
      "type": "object",
      "properties": {
        "testsCycleId": {
          "type": "string",
          "format": "uuid"
        },
        "testCaseId": {
          "type": "string",
          "format": "uuid"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "projectPlatformId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedResult": {
          "type": "string"
        },
        "observation": {
          "type": "string"
        },
        "assignedTo": {
          "type": "string",
          "format": "uuid"
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "testsCycleId",
        "testCaseId",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/executions" };
    const body: Record<string, unknown> = {};
    if (input.testsCycleId !== undefined) body["testsCycleId"] = input.testsCycleId;
    if (input.testCaseId !== undefined) body["testCaseId"] = input.testCaseId;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.projectPlatformId !== undefined) body["projectPlatformId"] = input.projectPlatformId;
    if (input.expectedResult !== undefined) body["expectedResult"] = input.expectedResult;
    if (input.observation !== undefined) body["observation"] = input.observation;
    if (input.assignedTo !== undefined) body["assignedTo"] = input.assignedTo;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_delete",
    description: "Delete execution\n\nTag: Executions",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/executions/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "executions_finish",
    description: "Finish an execution\n\nTag: Executions\n\nSets the execution state to `DONE` and records `executedAt` and `executedBy`. Allowed only when the current state is `IN_PROGRESS` — returns 400 for `WAITING`, `PAUSED` or `DONE`, when its parent tests cycle is `FINISHED`, or when the execution's `statusId` is still \"Em aberto\" (`NOT_EXECUTED`) — a verdict must be set first.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/executions-finish" };
    const body: Record<string, unknown> = {};
    if (input.id !== undefined) body["id"] = input.id;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_get",
    description: "Get execution by ID\n\nTag: Executions",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/executions/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "executions_list",
    description: "List executions\n\nTag: Executions",
    inputSchema: {
      "type": "object",
      "properties": {
        "testCaseId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by test case."
        },
        "testsCycleId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by tests cycle."
        },
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by project."
        }
      },
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/executions" };
    const query: Record<string, string> = {};
    if (input.testCaseId !== undefined && input.testCaseId !== null) query["testCaseId"] = String(input.testCaseId);
    if (input.testsCycleId !== undefined && input.testsCycleId !== null) query["testsCycleId"] = String(input.testsCycleId);
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "executions_pause",
    description: "Pause an execution\n\nTag: Executions\n\nSets the execution state to `PAUSED`. Allowed only when the current state is `IN_PROGRESS` — returns 400 for `WAITING`, `PAUSED` or `DONE`, or when its parent tests cycle is `FINISHED`.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/executions-pause" };
    const body: Record<string, unknown> = {};
    if (input.id !== undefined) body["id"] = input.id;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_run",
    description: "Start running an execution\n\nTag: Executions\n\nSets the execution state to `IN_PROGRESS`. Allowed only when the current state is `WAITING` or `PAUSED`. Returns 400 when the execution is already `IN_PROGRESS` or `DONE`, or when its parent tests cycle is `FINISHED`.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/executions-run" };
    const body: Record<string, unknown> = {};
    if (input.id !== undefined) body["id"] = input.id;
    req.body = body;
    return req;
  },
  },
  {
    name: "executions_update",
    description: "Update execution\n\nTag: Executions\n\nExecutions in `state: DONE` are read-only and cannot be updated through this endpoint (public V1 only — the internal API does not enforce this guard). The `state` field itself is system-managed and is silently ignored if sent in the body — use `/v1/executions-run`, `/v1/executions-pause` and `/v1/executions-finish` instead.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Execution ID"
        },
        "projectPlatformId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "expectedResult": {
          "type": [
            "string",
            "null"
          ]
        },
        "observation": {
          "type": [
            "string",
            "null"
          ]
        },
        "assignedTo": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/executions/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.projectPlatformId !== undefined) body["projectPlatformId"] = input.projectPlatformId;
    if (input.expectedResult !== undefined) body["expectedResult"] = input.expectedResult;
    if (input.observation !== undefined) body["observation"] = input.observation;
    if (input.assignedTo !== undefined) body["assignedTo"] = input.assignedTo;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "links_batch_create",
    description: "Link one entity to multiple entities at once\n\nTag: Links\n\nCreates one record per target. Operation is atomic — if any record fails, none are created. **Paid-plan only:** free-plan organizations receive 403.",
    inputSchema: {
      "type": "object",
      "properties": {
        "entityAType": {
          "type": "string",
          "enum": [
            "test-case",
            "test-cycle",
            "bug",
            "execution"
          ],
          "description": "The entity currently being viewed"
        },
        "entityAId": {
          "type": "string",
          "format": "uuid"
        },
        "targets": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "required": [
              "entityBType",
              "entityBId"
            ],
            "properties": {
              "entityBType": {
                "type": "string",
                "enum": [
                  "test-case",
                  "test-cycle",
                  "bug",
                  "execution"
                ],
                "description": "The entity being linked"
              },
              "entityBId": {
                "type": "string",
                "format": "uuid"
              }
            }
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "entityAType",
        "entityAId",
        "targets"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/links/batch" };
    const body: Record<string, unknown> = {};
    if (input.entityAType !== undefined) body["entityAType"] = input.entityAType;
    if (input.entityAId !== undefined) body["entityAId"] = input.entityAId;
    if (input.targets !== undefined) body["targets"] = input.targets;
    req.body = body;
    return req;
  },
  },
  {
    name: "links_create",
    description: "Create a link between two entities\n\nTag: Links\n\nCreates a directional link between two entities.\n\n**entityA** is the entity currently open or being edited — its ID is stored in the corresponding foreign key field.\n**entityB** is the entity being linked to entityA — its type is stored in `type` and its ID in `meloQaLinkedId`.\n\n**Example use case:** A user is editing a bug and opens the link panel to attach a test case.\nTo replicate this action via the API, set `entityAType` to `bug` and `entityAId` to the ID of the open bug,\nthen set `entityBType` to `test-case` and `entityBId` to the ID of the selected test case.\n\nThe same logic applies regardless of which entity type is open: always pass the entity being viewed as **entityA**\nand the entity being attached as **entityB**.\n\n**Paid-plan only:** this endpoint requires the organization to have an active subscription. Free-plan organizations receive 403.",
    inputSchema: {
      "type": "object",
      "properties": {
        "entityAType": {
          "type": "string",
          "enum": [
            "test-case",
            "test-cycle",
            "bug",
            "execution"
          ],
          "description": "The entity currently being viewed"
        },
        "entityAId": {
          "type": "string",
          "format": "uuid"
        },
        "entityBType": {
          "type": "string",
          "enum": [
            "test-case",
            "test-cycle",
            "bug",
            "execution"
          ],
          "description": "The entity being linked to entityA"
        },
        "entityBId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "entityAType",
        "entityAId",
        "entityBType",
        "entityBId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/links" };
    const body: Record<string, unknown> = {};
    if (input.entityAType !== undefined) body["entityAType"] = input.entityAType;
    if (input.entityAId !== undefined) body["entityAId"] = input.entityAId;
    if (input.entityBType !== undefined) body["entityBType"] = input.entityBType;
    if (input.entityBId !== undefined) body["entityBId"] = input.entityBId;
    req.body = body;
    return req;
  },
  },
  {
    name: "links_delete",
    description: "Remove a link\n\nTag: Links\n\n**Paid-plan only:** free-plan organizations receive 403.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Link ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/links/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "links_list",
    description: "List links for an entity\n\nTag: Links\n\nReturns all entities linked to the given entity, regardless of which side of the link it was created from.\n\n**Example use case:** A user opens a bug and the UI needs to display its linked items panel.\nPass `entityType=bug` and `entityId` as the ID of the open bug to retrieve all entities attached to it.\n\nThe response includes links where the given entity appears as either **entityA** (the entity that was open when the link was created)\nor **entityB** (the entity that was attached). Both directions are returned in a single call.",
    inputSchema: {
      "type": "object",
      "properties": {
        "entityType": {
          "type": "string",
          "enum": [
            "test-case",
            "test-cycle",
            "bug",
            "execution"
          ],
          "description": "Valid values: `test-case`, `test-cycle`, `bug`, `execution`"
        },
        "entityId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "entityType",
        "entityId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/links" };
    const query: Record<string, string> = {};
    if (input.entityType !== undefined && input.entityType !== null) query["entityType"] = String(input.entityType);
    if (input.entityId !== undefined && input.entityId !== null) query["entityId"] = String(input.entityId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "location_countries_list",
    description: "List all location countries\n\nTag: Location Countries",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/location-countries" };
    return req;
  },
  },
  {
    name: "organizations_get",
    description: "Get organization by ID\n\nTag: Organizations",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Organization ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/organizations/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "organizations_list",
    description: "List organizations\n\nTag: Organizations",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/organizations" };
    return req;
  },
  },
  {
    name: "organizations_members_list",
    description: "List members of an organization\n\nTag: Organizations",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Organization ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/organizations/${encodeURIComponent(String(input.id))}/members` };
    return req;
  },
  },
  {
    name: "organizations_update",
    description: "Update organization\n\nTag: Organizations\n\nThe `employeeQuantity` field accepts one of the following values: `1 a 10`, `11 a 50`, `51 a 100`, `100+`. Send `null` to clear the value.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Organization ID"
        },
        "name": {
          "type": "string"
        },
        "ownerId": {
          "type": "string",
          "format": "uuid",
          "description": "Transfer ownership (ADMINISTRATOR only)"
        },
        "companyName": {
          "type": [
            "string",
            "null"
          ]
        },
        "employeeQuantity": {
          "type": [
            "string",
            "null"
          ],
          "enum": [
            "1 a 10",
            "11 a 50",
            "51 a 100",
            "100+"
          ]
        },
        "location": {
          "type": [
            "string",
            "null"
          ]
        },
        "companySegment": {
          "type": [
            "string",
            "null"
          ]
        },
        "pictureUrl": {
          "type": [
            "string",
            "null"
          ]
        },
        "locationCountryId": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/organizations/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.ownerId !== undefined) body["ownerId"] = input.ownerId;
    if (input.companyName !== undefined) body["companyName"] = input.companyName;
    if (input.employeeQuantity !== undefined) body["employeeQuantity"] = input.employeeQuantity;
    if (input.location !== undefined) body["location"] = input.location;
    if (input.companySegment !== undefined) body["companySegment"] = input.companySegment;
    if (input.pictureUrl !== undefined) body["pictureUrl"] = input.pictureUrl;
    if (input.locationCountryId !== undefined) body["locationCountryId"] = input.locationCountryId;
    req.body = body;
    return req;
  },
  },
  {
    name: "project_pictures_list",
    description: "List available project pictures\n\nTag: Projects",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/project-pictures" };
    return req;
  },
  },
  {
    name: "project_platforms_list",
    description: "List platforms for a project\n\nTag: Project Platforms",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter platforms by project"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/project-platforms" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "projects_create",
    description: "Create project\n\nTag: Projects\n\nValidation rules:\n- `name` must not exceed 20 characters.\n- `description` must not exceed 250 characters.\n- `projectPictureUrl` must reference a project picture predefined by the meloQA API — list the available IDs via `GET /v1/project-pictures`.",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 20
        },
        "organizationId": {
          "type": "string",
          "format": "uuid"
        },
        "projectPictureUrl": {
          "type": "string",
          "format": "uuid",
          "description": "ID of a project picture — get available IDs from GET /v1/project-pictures"
        },
        "description": {
          "type": "string",
          "maxLength": 250
        },
        "testCaseTypeId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "organizationId",
        "projectPictureUrl"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/projects" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.organizationId !== undefined) body["organizationId"] = input.organizationId;
    if (input.projectPictureUrl !== undefined) body["projectPictureUrl"] = input.projectPictureUrl;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.testCaseTypeId !== undefined) body["testCaseTypeId"] = input.testCaseTypeId;
    req.body = body;
    return req;
  },
  },
  {
    name: "projects_delete",
    description: "Delete project\n\nTag: Projects",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/projects/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "projects_execution_statuses_list",
    description: "List execution statuses available in a project\n\nTag: Projects\n\nReturns the execution statuses that can be assigned to executions in this project. Includes both the system-wide defaults (`projectId: null`, `isDefault: true`) and any project-specific statuses created for it. Use the `id` of an entry as `statusId` when creating or updating an execution.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/projects/${encodeURIComponent(String(input.id))}/execution-statuses` };
    return req;
  },
  },
  {
    name: "projects_get",
    description: "Get project by ID\n\nTag: Projects",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/projects/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "projects_list",
    description: "List projects\n\nTag: Projects\n\nReturns only projects the authenticated user has effective access to (i.e. is a project member of).",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/projects" };
    return req;
  },
  },
  {
    name: "projects_members_list",
    description: "List members of a project\n\nTag: Projects\n\nReturns the active (non-deleted) members of the project. The caller must be a member of the project.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/projects/${encodeURIComponent(String(input.id))}/members` };
    return req;
  },
  },
  {
    name: "projects_test_case_custom_fields_list",
    description: "List custom field definitions for test cases of a project\n\nTag: Projects\n\nReturns the custom field schema configured for test cases in the project. Use the `id` of each entry as `projectCustomFieldId` when reading or writing test case custom field values.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/projects/${encodeURIComponent(String(input.id))}/test-case-custom-fields` };
    return req;
  },
  },
  {
    name: "projects_update",
    description: "Update project\n\nTag: Projects\n\nValidation rules:\n- `name` must not exceed 20 characters.\n- `description` must not exceed 250 characters.\n- `projectPictureUrl` must reference a project picture predefined by the meloQA API — list the available IDs via `GET /v1/project-pictures`.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Project ID"
        },
        "name": {
          "type": "string",
          "maxLength": 20
        },
        "description": {
          "type": [
            "string",
            "null"
          ],
          "maxLength": 250
        },
        "projectPictureUrl": {
          "type": "string",
          "format": "uuid",
          "description": "ID of a project picture — get available IDs from GET /v1/project-pictures"
        },
        "testCaseTypeId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "isArchived": {
          "type": "boolean"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/projects/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.projectPictureUrl !== undefined) body["projectPictureUrl"] = input.projectPictureUrl;
    if (input.testCaseTypeId !== undefined) body["testCaseTypeId"] = input.testCaseTypeId;
    if (input.isArchived !== undefined) body["isArchived"] = input.isArchived;
    req.body = body;
    return req;
  },
  },
  {
    name: "tags_create",
    description: "Create tag\n\nTag: Tags",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "color": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/tags" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.color !== undefined) body["color"] = input.color;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    req.body = body;
    return req;
  },
  },
  {
    name: "tags_delete",
    description: "Delete tag\n\nTag: Tags",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Tag ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/tags/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "tags_get",
    description: "Get tag by ID\n\nTag: Tags",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Tag ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/tags/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "tags_list",
    description: "List tags\n\nTag: Tags",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter tags by project"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/tags" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "tags_update",
    description: "Update tag\n\nTag: Tags",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Tag ID"
        },
        "name": {
          "type": "string"
        },
        "color": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/tags/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.color !== undefined) body["color"] = input.color;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_case_folders_create",
    description: "Create test case folder\n\nTag: Test Case Folders\n\nFolder hierarchy is limited to **3 sub-levels** below the project root. Creating a folder under a parent that is already at the 3rd sub-level returns 400.",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "parentId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/test-case-folders" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_case_folders_delete",
    description: "Delete test case folder\n\nTag: Test Case Folders\n\nRemoves the folder and hard-deletes every test case it contained, matching the meloQA front-end behavior. Child folders are removed in the same operation.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/test-case-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "test_case_folders_get",
    description: "Get test case folder by ID\n\nTag: Test Case Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case Folder ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/test-case-folders/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "test_case_folders_list",
    description: "List test case folders\n\nTag: Test Case Folders",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter folders by project"
        },
        "parentId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by parent folder"
        }
      },
      "additionalProperties": false,
      "required": [
        "projectId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/test-case-folders" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.parentId !== undefined && input.parentId !== null) query["parentId"] = String(input.parentId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "test_case_folders_update",
    description: "Update test case folder\n\nTag: Test Case Folders\n\nWhen `parentId` is changed, the folder is moved together with its whole subtree. The resulting hierarchy must not exceed **3 sub-levels** below the project root — otherwise the request is rejected with 400.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case Folder ID"
        },
        "name": {
          "type": "string"
        },
        "parentId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/test-case-folders/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.parentId !== undefined) body["parentId"] = input.parentId;
    if (input.order !== undefined) body["order"] = input.order;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_case_statuses_list",
    description: "List all test case statuses\n\nTag: Test Case Statuses",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/test-case-statuses" };
    return req;
  },
  },
  {
    name: "test_case_types_list",
    description: "List all test case types\n\nTag: Test Case Types",
    inputSchema: {
      "type": "object",
      "properties": {},
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/test-case-types" };
    return req;
  },
  },
  {
    name: "test_cases_archived_list",
    description: "List archived test cases\n\nTag: Test Cases\n\nReturns only archived test cases (`statusId === ARCHIVED`). At least one of **projectId** or **folderId** is required.",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by project. At least one of projectId or folderId is required."
        },
        "folderId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by folder. At least one of projectId or folderId is required."
        }
      },
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/test-cases/archived" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.folderId !== undefined && input.folderId !== null) query["folderId"] = String(input.folderId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "test_cases_attachments_create",
    description: "Create test case attachment (returns presigned upload URL)\n\nTag: Test Case Attachments\n\nCria o registro do anexo (uploaded=false) e retorna uma presigned URL S3 (PUT, 300s). Faça o PUT do arquivo na `uploadUrl` e depois confirme com PATCH /v1/test-cases/:id/attachments/:attachmentId.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        },
        "fileName": {
          "type": "string"
        },
        "size": {
          "type": "integer",
          "description": "Tamanho em bytes"
        },
        "type": {
          "type": "string",
          "description": "MIME type"
        },
        "md5": {
          "type": "string"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "fileName",
        "size",
        "type",
        "md5"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}/attachments` };
    const body: Record<string, unknown> = {};
    if (input.fileName !== undefined) body["fileName"] = input.fileName;
    if (input.size !== undefined) body["size"] = input.size;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.md5 !== undefined) body["md5"] = input.md5;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_cases_attachments_delete",
    description: "Delete test case attachment\n\nTag: Test Case Attachments\n\nRemove o anexo (registro + arquivo no S3).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "test_cases_attachments_list",
    description: "List test case attachments\n\nTag: Test Case Attachments\n\nLista os anexos do test case. Itens com `uploaded=true` trazem `downloadUrl` (presigned, 300s).",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}/attachments` };
    return req;
  },
  },
  {
    name: "test_cases_attachments_update",
    description: "Confirm test case attachment upload\n\nTag: Test Case Attachments\n\nMarca o anexo como enviado (`uploaded=true`) após o PUT no S3.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        },
        "attachmentId": {
          "type": "string",
          "format": "uuid",
          "description": "Attachment ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "attachmentId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}/attachments/${encodeURIComponent(String(input.attachmentId))}` };
    return req;
  },
  },
  {
    name: "test_cases_create",
    description: "Create test case\n\nTag: Test Cases",
    inputSchema: {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "format": "uuid"
        },
        "type": {
          "type": "string",
          "format": "uuid",
          "description": "Test case type ID — use GET /v1/test-case-types"
        },
        "statusId": {
          "type": "string",
          "format": "uuid",
          "description": "Test case status ID — use GET /v1/test-case-statuses"
        },
        "description": {
          "type": "string"
        },
        "preRequirements": {
          "type": "string"
        },
        "expectedResult": {
          "type": "string"
        },
        "scenario": {
          "type": "string"
        },
        "folderId": {
          "type": "string",
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        },
        "automation": {
          "type": "string",
          "enum": [
            "NOT_AUTOMATED",
            "AUTOMATED"
          ]
        },
        "automated": {
          "type": "string",
          "enum": [
            "NO",
            "IN_PROGRESS",
            "YES"
          ],
          "description": "Estado de automatização exibido na UI. Se omitido, é derivado de `automation` (AUTOMATED→YES, senão NO)."
        },
        "specificationTime": {
          "type": "integer"
        },
        "automatizationTime": {
          "type": "integer"
        },
        "bddRawText": {
          "type": "string"
        },
        "customFields": {
          "type": "array",
          "description": "Values for the project's custom fields. Discover the available fields and their `id`s via `GET /v1/projects/{projectId}/test-case-custom-fields`.\n\nEach item targets one custom field by `projectCustomFieldId`. Send **`value`** for free-form fields (text, number, …) or **`selectId`** for select-type fields (must reference one of `selects[].id` returned by the listing endpoint). Exactly one of `value`/`selectId` must be provided per item.\n\nOn `POST` the items create the values for the new test case. On `PATCH` each item is upserted by `(testCaseId, projectCustomFieldId)`: existing values are replaced, missing fields are created, and fields not mentioned in the array are left untouched.\n\n**Required fields rule:** every project custom field with `isRequired: true` and `isEnabled: true` must end up with a value. On `POST` they must be present in this array; on `PATCH` they must be either present here or already filled on the test case (otherwise the request is rejected with 400).\n\n**Disabled fields:** entries that target a custom field with `isEnabled: false` are silently ignored — the field is no longer in use, so the value is neither persisted nor counted toward the required-field rule.",
          "items": {
            "type": "object",
            "required": [
              "projectCustomFieldId"
            ],
            "properties": {
              "projectCustomFieldId": {
                "type": "string",
                "format": "uuid",
                "description": "ID returned by GET /v1/projects/{projectId}/test-case-custom-fields."
              },
              "value": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "Used for non-select fields."
              },
              "selectId": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uuid",
                "description": "Used for select-type fields. Must be one of `selects[].id`."
              }
            }
          }
        },
        "steps": {
          "type": "array",
          "description": "Test case steps. The required shape depends on the test case type — list the available types and their IDs via `GET /v1/test-case-types` and pass the chosen `id` as `type` in the body. The four built-in types behave as follows:\n\n- **BDD**: at least 1 step required. Each step has `description` (required), `gherkinKeyword` (optional, defaults to `given`), and `data` (optional). `expectedResult` on the step is rejected — the BDD outcome is expressed by the `then` keyword.\n- **EXPECTED_RESULT_PER_STEP**: at least 1 step required. Each step has `description` and `expectedResult` (both required); `data` is optional. `gherkinKeyword` is rejected.\n- **GENERAL_EXEPECTED_RESULT**: steps are optional. When provided, each step has `description` (required) and `data` (optional). `expectedResult` on the test case (top-level) is required.\n- **NO_STEP**: steps are rejected. `expectedResult` on the test case is required.\n\nOn `POST` the steps are created with the new test case. On `PATCH` sending `steps` replaces the existing list (soft-deletes old steps and creates new ones). Omit `steps` from the body to leave them untouched.",
          "items": {
            "type": "object",
            "required": [
              "description"
            ],
            "properties": {
              "description": {
                "type": "string",
                "description": "Step description. Required for every type."
              },
              "expectedResult": {
                "type": "string",
                "description": "Required for EXPECTED_RESULT_PER_STEP. Rejected for BDD/NO_STEP/GENERAL_EXEPECTED_RESULT."
              },
              "data": {
                "type": "string",
                "description": "Optional input data — accepted for BDD, EXPECTED_RESULT_PER_STEP and GENERAL_EXEPECTED_RESULT. Rejected for NO_STEP."
              },
              "gherkinKeyword": {
                "type": "string",
                "enum": [
                  "given",
                  "and",
                  "when",
                  "then",
                  "but"
                ],
                "description": "BDD only — defaults to `given`. Rejected for other types."
              }
            }
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "projectId",
        "type",
        "statusId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: "/v1/test-cases" };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.projectId !== undefined) body["projectId"] = input.projectId;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.preRequirements !== undefined) body["preRequirements"] = input.preRequirements;
    if (input.expectedResult !== undefined) body["expectedResult"] = input.expectedResult;
    if (input.scenario !== undefined) body["scenario"] = input.scenario;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    if (input.order !== undefined) body["order"] = input.order;
    if (input.automation !== undefined) body["automation"] = input.automation;
    if (input.automated !== undefined) body["automated"] = input.automated;
    if (input.specificationTime !== undefined) body["specificationTime"] = input.specificationTime;
    if (input.automatizationTime !== undefined) body["automatizationTime"] = input.automatizationTime;
    if (input.bddRawText !== undefined) body["bddRawText"] = input.bddRawText;
    if (input.customFields !== undefined) body["customFields"] = input.customFields;
    if (input.steps !== undefined) body["steps"] = input.steps;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_cases_delete",
    description: "Delete test case\n\nTag: Test Cases",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "DELETE", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "test_cases_get",
    description: "Get test case by ID\n\nTag: Test Cases",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}` };
    return req;
  },
  },
  {
    name: "test_cases_list",
    description: "List test cases\n\nTag: Test Cases\n\nAt least one query parameter is required: **projectId** or **folderId**. Archived test cases (`statusId === ARCHIVED`) are excluded — use `GET /v1/test-cases/archived` to list those.",
    inputSchema: {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by project. At least one of projectId or folderId is required."
        },
        "folderId": {
          "type": "string",
          "format": "uuid",
          "description": "Filter by folder. At least one of projectId or folderId is required."
        }
      },
      "additionalProperties": false
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "GET", path: "/v1/test-cases" };
    const query: Record<string, string> = {};
    if (input.projectId !== undefined && input.projectId !== null) query["projectId"] = String(input.projectId);
    if (input.folderId !== undefined && input.folderId !== null) query["folderId"] = String(input.folderId);
    if (Object.keys(query).length > 0) req.query = query;
    return req;
  },
  },
  {
    name: "test_cases_unarchive",
    description: "Unarchive test case\n\nTag: Test Cases\n\nRestores an archived test case (`statusId === ARCHIVED`) into the folder specified by `folderId`. The status returns to whatever it was before archiving (`statusBeforeId`); when no previous status is recorded the test case falls back to `FINISHED`.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        },
        "folderId": {
          "type": "string",
          "format": "uuid",
          "description": "Target folder. Must belong to the same project as the test case and must not be a trash folder."
        }
      },
      "additionalProperties": false,
      "required": [
        "id",
        "folderId"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "POST", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}/unarchive` };
    const body: Record<string, unknown> = {};
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    req.body = body;
    return req;
  },
  },
  {
    name: "test_cases_update",
    description: "Update test case\n\nTag: Test Cases\n\nArchived test cases (`statusId === ARCHIVED`) are read-only and cannot be updated through this endpoint.",
    inputSchema: {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
          "description": "Test Case ID"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "format": "uuid"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "preRequirements": {
          "type": [
            "string",
            "null"
          ]
        },
        "expectedResult": {
          "type": [
            "string",
            "null"
          ]
        },
        "scenario": {
          "type": [
            "string",
            "null"
          ]
        },
        "statusId": {
          "type": "string",
          "format": "uuid"
        },
        "folderId": {
          "type": [
            "string",
            "null"
          ],
          "format": "uuid"
        },
        "order": {
          "type": "integer"
        },
        "automation": {
          "type": [
            "string",
            "null"
          ],
          "enum": [
            "NOT_AUTOMATED",
            "AUTOMATED"
          ]
        },
        "automated": {
          "type": "string",
          "enum": [
            "NO",
            "IN_PROGRESS",
            "YES"
          ],
          "description": "Estado de automatização exibido na UI. Se omitido, é derivado de `automation` (AUTOMATED→YES, senão NO)."
        },
        "specificationTime": {
          "type": "integer"
        },
        "automatizationTime": {
          "type": "integer"
        },
        "bddRawText": {
          "type": [
            "string",
            "null"
          ]
        },
        "customFields": {
          "type": "array",
          "description": "Values for the project's custom fields. Discover the available fields and their `id`s via `GET /v1/projects/{projectId}/test-case-custom-fields`.\n\nEach item targets one custom field by `projectCustomFieldId`. Send **`value`** for free-form fields (text, number, …) or **`selectId`** for select-type fields (must reference one of `selects[].id` returned by the listing endpoint). Exactly one of `value`/`selectId` must be provided per item.\n\nOn `POST` the items create the values for the new test case. On `PATCH` each item is upserted by `(testCaseId, projectCustomFieldId)`: existing values are replaced, missing fields are created, and fields not mentioned in the array are left untouched.\n\n**Required fields rule:** every project custom field with `isRequired: true` and `isEnabled: true` must end up with a value. On `POST` they must be present in this array; on `PATCH` they must be either present here or already filled on the test case (otherwise the request is rejected with 400).\n\n**Disabled fields:** entries that target a custom field with `isEnabled: false` are silently ignored — the field is no longer in use, so the value is neither persisted nor counted toward the required-field rule.",
          "items": {
            "type": "object",
            "required": [
              "projectCustomFieldId"
            ],
            "properties": {
              "projectCustomFieldId": {
                "type": "string",
                "format": "uuid",
                "description": "ID returned by GET /v1/projects/{projectId}/test-case-custom-fields."
              },
              "value": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "Used for non-select fields."
              },
              "selectId": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "uuid",
                "description": "Used for select-type fields. Must be one of `selects[].id`."
              }
            }
          }
        },
        "steps": {
          "type": "array",
          "description": "Test case steps. The required shape depends on the test case type — list the available types and their IDs via `GET /v1/test-case-types` and pass the chosen `id` as `type` in the body. The four built-in types behave as follows:\n\n- **BDD**: at least 1 step required. Each step has `description` (required), `gherkinKeyword` (optional, defaults to `given`), and `data` (optional). `expectedResult` on the step is rejected — the BDD outcome is expressed by the `then` keyword.\n- **EXPECTED_RESULT_PER_STEP**: at least 1 step required. Each step has `description` and `expectedResult` (both required); `data` is optional. `gherkinKeyword` is rejected.\n- **GENERAL_EXEPECTED_RESULT**: steps are optional. When provided, each step has `description` (required) and `data` (optional). `expectedResult` on the test case (top-level) is required.\n- **NO_STEP**: steps are rejected. `expectedResult` on the test case is required.\n\nOn `POST` the steps are created with the new test case. On `PATCH` sending `steps` replaces the existing list (soft-deletes old steps and creates new ones). Omit `steps` from the body to leave them untouched.",
          "items": {
            "type": "object",
            "required": [
              "description"
            ],
            "properties": {
              "description": {
                "type": "string",
                "description": "Step description. Required for every type."
              },
              "expectedResult": {
                "type": "string",
                "description": "Required for EXPECTED_RESULT_PER_STEP. Rejected for BDD/NO_STEP/GENERAL_EXEPECTED_RESULT."
              },
              "data": {
                "type": "string",
                "description": "Optional input data — accepted for BDD, EXPECTED_RESULT_PER_STEP and GENERAL_EXEPECTED_RESULT. Rejected for NO_STEP."
              },
              "gherkinKeyword": {
                "type": "string",
                "enum": [
                  "given",
                  "and",
                  "when",
                  "then",
                  "but"
                ],
                "description": "BDD only — defaults to `given`. Rejected for other types."
              }
            }
          }
        }
      },
      "additionalProperties": false,
      "required": [
        "id"
      ]
    },
    request: (input: any) => {
    const req: HttpRequest = { method: "PATCH", path: `/v1/test-cases/${encodeURIComponent(String(input.id))}` };
    const body: Record<string, unknown> = {};
    if (input.name !== undefined) body["name"] = input.name;
    if (input.type !== undefined) body["type"] = input.type;
    if (input.description !== undefined) body["description"] = input.description;
    if (input.preRequirements !== undefined) body["preRequirements"] = input.preRequirements;
    if (input.expectedResult !== undefined) body["expectedResult"] = input.expectedResult;
    if (input.scenario !== undefined) body["scenario"] = input.scenario;
    if (input.statusId !== undefined) body["statusId"] = input.statusId;
    if (input.folderId !== undefined) body["folderId"] = input.folderId;
    if (input.order !== undefined) body["order"] = input.order;
    if (input.automation !== undefined) body["automation"] = input.automation;
    if (input.automated !== undefined) body["automated"] = input.automated;
    if (input.specificationTime !== undefined) body["specificationTime"] = input.specificationTime;
    if (input.automatizationTime !== undefined) body["automatizationTime"] = input.automatizationTime;
    if (input.bddRawText !== undefined) body["bddRawText"] = input.bddRawText;
    if (input.customFields !== undefined) body["customFields"] = input.customFields;
    if (input.steps !== undefined) body["steps"] = input.steps;
    req.body = body;
    return req;
  },
  }
];
