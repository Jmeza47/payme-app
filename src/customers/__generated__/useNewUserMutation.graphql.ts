/**
 * @generated SignedSource<<c022022daa68c56b858621a768212b81>>
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
export type useNewUserMutation$variables = {
  customerData: CreateCustomerInput;
};
export type useNewUserMutation$data = {
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
export type useNewUserMutation = {
  response: useNewUserMutation$data;
  variables: useNewUserMutation$variables;
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
    "name": "useNewUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNewUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b14e16d5947792b89a11fc0c8b262ca0",
    "id": null,
    "metadata": {},
    "name": "useNewUserMutation",
    "operationKind": "mutation",
    "text": "mutation useNewUserMutation(\n  $customerData: CreateCustomerInput!\n) {\n  createCustomer(input: $customerData) {\n    _id\n    name\n    lastName\n    phone1\n    address\n    ref1\n    ref1Tel\n  }\n}\n"
  }
};
})();

(node as any).hash = "cca43d83354e21ed0449051bf8ff6b56";

export default node;
