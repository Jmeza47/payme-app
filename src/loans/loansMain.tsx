import ShowLoansTable from "./loansTables/loansTable";

import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { loansMainQuery } from "./__generated__/loansMainQuery.graphql";
import {
  LoansCountWidget,
  ActiveLoansCountWidget,
  TotalMoneyBorrowedWidget,
  TotalInterestAccruedWidget,
} from "./Widget/loansWidgets";

const getLoansQuery = graphql`
  query loansMainQuery {
    loansConnection(first: 100) @connection(key: "main_loansConnection") {
      edges {
        ...loansTable
      }
    }
  }
`;

export default function LoansMain() {
  const data = useLazyLoadQuery<loansMainQuery>(getLoansQuery, {});

  return (
    <div className=" space-y-4">
      <div className="flex space-x-4  justify-between">
        <LoansCountWidget />
        <ActiveLoansCountWidget />
        <TotalMoneyBorrowedWidget />
        <TotalInterestAccruedWidget />
      </div>

      <ShowLoansTable loansFragmentKey={data.loansConnection?.edges ?? null} />
    </div>
  );
}
