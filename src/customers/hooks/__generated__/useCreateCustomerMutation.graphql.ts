/**
 * @generated SignedSource<<f307a0552dc5a41815067a75afadc5aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type customerDataInput = {
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
export type useCreateCustomerMutation$variables = {
  customerData: customerDataInput;
};
export type useCreateCustomerMutation$data = {
  readonly createCustomer: {
    readonly _id: string;
    readonly address: string;
    readonly lastName: string;
    readonly name: string;
    readonly phone1: string;
    readonly phone2: string | null | undefined;
    readonly ref1: string;
    readonly ref1Tel: string;
    readonly ref2: string | null | undefined;
    readonly ref2Tel: string | null | undefined;
  } | null | undefined;
};
export type useCreateCustomerMutation = {
  response: useCreateCustomerMutation$data;
  variables: useCreateCustomerMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "customerData"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "customerData"
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
        "name": "phone2",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ref2",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ref2Tel",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateCustomerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateCustomerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2925a1be98534640c995aee6dd9a152d",
    "id": null,
    "metadata": {},
    "name": "useCreateCustomerMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateCustomerMutation(\n  $customerData: customerDataInput!\n) {\n  createCustomer(input: $customerData) {\n    _id\n    name\n    lastName\n    phone1\n    phone2\n    address\n    ref1\n    ref1Tel\n    ref2\n    ref2Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "37ae47768b533b6e69751befd7f64800";

export default node;
