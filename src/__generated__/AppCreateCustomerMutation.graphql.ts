/**
 * @generated SignedSource<<6f906f3af9c47ff59e3e0e356fd048d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppCreateCustomerMutation$variables = {
  address: string;
  lastName: string;
  name: string;
  phone1: string;
  phone2?: string | null | undefined;
  ref1: string;
  ref1Tel: string;
  ref2?: string | null | undefined;
  ref2Tel?: string | null | undefined;
};
export type AppCreateCustomerMutation$data = {
  readonly createCustomer: {
    readonly _id: string;
    readonly address: string;
    readonly lastName: string;
    readonly name: string;
    readonly phone1: string;
    readonly ref1: string;
    readonly ref1Tel: string;
  } | null | undefined;
};
export type AppCreateCustomerMutation = {
  response: AppCreateCustomerMutation$data;
  variables: AppCreateCustomerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "address"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "phone1"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "phone2"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ref1"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ref1Tel"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ref2"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ref2Tel"
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "address",
            "variableName": "address"
          },
          {
            "kind": "Variable",
            "name": "lastName",
            "variableName": "lastName"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "phone1",
            "variableName": "phone1"
          },
          {
            "kind": "Variable",
            "name": "phone2",
            "variableName": "phone2"
          },
          {
            "kind": "Variable",
            "name": "ref1",
            "variableName": "ref1"
          },
          {
            "kind": "Variable",
            "name": "ref1Tel",
            "variableName": "ref1Tel"
          },
          {
            "kind": "Variable",
            "name": "ref2",
            "variableName": "ref2"
          },
          {
            "kind": "Variable",
            "name": "ref2Tel",
            "variableName": "ref2Tel"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "Customer",
    "kind": "LinkedField",
    "name": "createCustomer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone1",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "address",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ref1",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ref1Tel",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCreateCustomerMutation",
    "selections": (v9/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v4/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppCreateCustomerMutation",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "6abae58fa28b3879c31adbc779afd6c5",
    "id": null,
    "metadata": {},
    "name": "AppCreateCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation AppCreateCustomerMutation(\n  $name: String!\n  $lastName: String!\n  $phone1: String!\n  $address: String!\n  $ref1: String!\n  $ref1Tel: String!\n  $phone2: String\n  $ref2: String\n  $ref2Tel: String\n) {\n  createCustomer(input: {name: $name, lastName: $lastName, phone1: $phone1, address: $address, ref1: $ref1, ref1Tel: $ref1Tel, phone2: $phone2, ref2: $ref2, ref2Tel: $ref2Tel}) {\n    _id\n    name\n    lastName\n    phone1\n    address\n    ref1\n    ref1Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "59425f2098be05870aa567f35f896e7d";

export default node;
