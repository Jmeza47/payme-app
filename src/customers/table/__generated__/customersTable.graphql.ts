/**
 * @generated SignedSource<<ff519d3defa05aa3f0182ecbd2db767b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type customersTable$data = ReadonlyArray<{
  readonly node: {
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
  readonly " $fragmentType": "customersTable";
}>;
export type customersTable$key = ReadonlyArray<{
  readonly " $data"?: customersTable$data;
  readonly " $fragmentSpreads": FragmentRefs<"customersTable">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "customersTable",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Customer",
      "kind": "LinkedField",
      "name": "node",
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
  ],
  "type": "CustomerEdge",
  "abstractKey": null
};

(node as any).hash = "6d2e8cfd978f595fda7c7ba85193bf52";

export default node;
