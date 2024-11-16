import { Schema } from "@aws-amplify/datastore";

export const schema: Schema = {
    "models": {},
    "enums": {
        "PaymentStatus": {
            "name": "PaymentStatus",
            "values": [
                "ACTIVE",
                "PAID"
            ]
        }
    },
    "nonModels": {
        "Customer": {
            "name": "Customer",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone1": {
                    "name": "phone1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone2": {
                    "name": "phone2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ref1": {
                    "name": "ref1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ref1Tel": {
                    "name": "ref1Tel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ref2": {
                    "name": "ref2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ref2Tel": {
                    "name": "ref2Tel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomerConnection": {
            "name": "CustomerConnection",
            "fields": {
                "edges": {
                    "name": "edges",
                    "isArray": true,
                    "type": {
                        "nonModel": "CustomerEdge"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pageInfo": {
                    "name": "pageInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "PageInfo"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "CustomerEdge": {
            "name": "CustomerEdge",
            "fields": {
                "cursor": {
                    "name": "cursor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "node": {
                    "name": "node",
                    "isArray": false,
                    "type": {
                        "nonModel": "Customer"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Loan": {
            "name": "Loan",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "loanAmount": {
                    "name": "loanAmount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "loanDate": {
                    "name": "loanDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "loanInterest": {
                    "name": "loanInterest",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "loanStatus": {
                    "name": "loanStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "loanTerm": {
                    "name": "loanTerm",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentSchedule": {
                    "name": "paymentSchedule",
                    "isArray": true,
                    "type": {
                        "nonModel": "PaymentSchedule"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "LoanConnection": {
            "name": "LoanConnection",
            "fields": {
                "edges": {
                    "name": "edges",
                    "isArray": true,
                    "type": {
                        "nonModel": "LoanEdge"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pageInfo": {
                    "name": "pageInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "PageInfo"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "totalCount": {
                    "name": "totalCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "LoanEdge": {
            "name": "LoanEdge",
            "fields": {
                "cursor": {
                    "name": "cursor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "node": {
                    "name": "node",
                    "isArray": false,
                    "type": {
                        "nonModel": "Loan"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PageInfo": {
            "name": "PageInfo",
            "fields": {
                "endCursor": {
                    "name": "endCursor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hasNextPage": {
                    "name": "hasNextPage",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "hasPreviousPage": {
                    "name": "hasPreviousPage",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "startCursor": {
                    "name": "startCursor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PaymentSchedule": {
            "name": "PaymentSchedule",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "amountPaid": {
                    "name": "amountPaid",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "dueDays": {
                    "name": "dueDays",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "extraInterest": {
                    "name": "extraInterest",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "interestPaid": {
                    "name": "interestPaid",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentDate": {
                    "name": "paymentDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "PaymentStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "de4006c05a86bce6dc09aa8453d49040"
};