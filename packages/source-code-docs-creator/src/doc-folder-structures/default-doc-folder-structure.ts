import { IPagePacketSchema } from "../models/page-packet-schema/i-page-packet-schema";

const DefaultDocFolderStructure: IPagePacketSchema = {
    root: {
        cardinality: 1,
        name: "api",
        subType: "rootFolder",
        type: "folder",
        contents: [
            {
                cardinality: 1,
                name: "index",
                subType: "index",
                title: "Home",
                type: "file",
            },
            {
                
                cardinality: 1,
                name: "classes",
                subType: "classFolder",
                type: "folder",
                contents: [
                    {
                        cardinality: 1,
                        name: "index",
                        subType: "classIndex",
                        title: "Classes",
                        type: "file",
                    },
                    {
                        cardinality: "infinity",
                        name: "%name%",
                        subType: "class",
                        title: "Class",
                        type: "file",
                    }
                ],
            },
            {
                cardinality: 1,
                name: "interfaces",
                subType: "interfaceFolder",
                type: "folder",
                contents: [
                    {
                        cardinality: 1,
                        name: "index",
                        subType: "interfaceIndex",
                        title: "Interfaces",
                        type: "file",
                    },
                    {
                        cardinality: "infinity",
                        name: "%name%",
                        subType: "interface",
                        title: "Interface",
                        type: "file",
                    }
                ],
            },
            {
                cardinality: 1,
                name: "functions",
                subType: "functionFolder",
                type: "folder",
                contents: [
                    {
                        cardinality: 1,
                        name: "index",
                        subType: "functionIndex",
                        title: "Functions",
                        type: "file",
                    },
                    {
                        cardinality: "infinity",
                        name: "%name%",
                        subType: "function",
                        title: "Function",
                        type: "file",
                    },
                ],
            },
        ],
    },
};

export { DefaultDocFolderStructure };
