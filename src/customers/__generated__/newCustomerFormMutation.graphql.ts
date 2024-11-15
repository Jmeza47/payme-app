/**
 * @generated SignedSource<<351da4d604f0cc5482591279d76edaec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateCustomerInput = {
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
export type newCustomerFormMutation$variables = {
  customerData: CreateCustomerInput;
};
export type newCustomerFormMutation$data = {
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
export type newCustomerFormMutation = {
  response: newCustomerFormMutation$data;
  variables: newCustomerFormMutation$variables;
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "newCustomerFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newCustomerFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9dca089a8a3a25c249389deab423439a",
    "id": null,
    "metadata": {},
    "name": "newCustomerFormMutation",
    "operationKind": "mutation",
    "text": "mutation newCustomerFormMutation(\n  $customerData: CreateCustomerInput!\n) {\n  createCustomer(input: $customerData) {\n    _id\n    name\n    lastName\n    phone1\n    address\n    ref1\n    ref1Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "d41b74b98a36d39adda50edb8f39aa03";

export default node;
