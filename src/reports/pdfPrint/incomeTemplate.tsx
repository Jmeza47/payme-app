import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/logo.png";
import dayjs from "dayjs";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { useMemo } from "react";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";

const styles = StyleSheet.create({
  body: {
    padding: 40,
    fontSize: 10,
  },
  logoContainer: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "flex-end",
    color: "black",
  },
  tableContainer: {
    border: "1px solid #e8e8e8",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderBottom: "1px solid #e8e8e8",
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
    borderBottom: "1px solid #e8e8e8",
  },
  tableColHeader: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    borderRight: "1px solid #e8e8e8",
  },
  tableCol: {
    flex: 1,
    textAlign: "center",
    borderRight: "1px solid #e8e8e8",
  },
  oddRow: {
    backgroundColor: "#fafafa",
  },
  evenRow: {
    backgroundColor: "#ffffff",
  },
  summaryRow: {
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    padding: 8,
    fontWeight: "bold",
  },
});

export function IncomeTemplate({ data }: { data: any[] }) {
  if (!data || !data.length) {
    return null;
  }

  const { customers } = useGetCustomers();

  // Calculate summary values
  const summary = {
    loanAmount: data.reduce((sum, row) => sum + (row.loanAmount || 0), 0),
    loanInterest: data.reduce((sum, row) => sum + (row.loanInterest || 0), 0),
    paidAmount: data.reduce((sum, row) => sum + (row.paidAmount || 0), 0),
    pendingAmount: data.reduce((sum, row) => sum + (row.pendingAmount || 0), 0),
    interestPaid: data.reduce((sum, row) => sum + (row.interestPaid || 0), 0),
    interestPending: data.reduce(
      (sum, row) => sum + (row.interestPending || 0),
      0
    ),
  };

  const customerNameMap = useMemo(() => {
    const map = {};
    customers.forEach((customer) => {
      map[customer._id] = `${customer.name} ${customer.lastName}`;
    });
    return map;
  }, [customers]);

  return (
    <Document>
      <Page style={styles.body} size="LETTER" orientation="landscape">
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "left", fontSize: 14 }}>
            Reporte de Ingresos
          </Text>
          <View style={styles.logoContainer}>
            <Image src={logo} style={{ width: 60, alignSelf: "flex-end" }} />
          </View>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.tableColHeader}>Fecha de Prestamo</Text>
            <Text style={styles.tableColHeader}>Cliente</Text>
            <Text style={styles.tableColHeader}>Capital</Text>
            <Text style={styles.tableColHeader}>Interes</Text>
            <Text style={styles.tableColHeader}>Cap. Pagado</Text>
            <Text style={styles.tableColHeader}>Cap. Pendiente</Text>
            <Text style={styles.tableColHeader}>Int. Pagado</Text>
            <Text style={styles.tableColHeader}>Int. Pendiente</Text>
          </View>

          {/* Table Rows */}
          {data.map((row, index) => (
            <View
              key={index}
              style={[
                styles.tableRow,
                index % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}
            >
              <Text style={styles.tableCol}>
                {dayjs(row.loanDate).format("DD/MM/YYYY")}
              </Text>
              <Text style={styles.tableCol}>
                {customerNameMap[row.customerId]}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(row.loanAmount)}
              </Text>
              <Text style={styles.tableCol}>{`${row.loanInterest}%`}</Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(row.paidAmount)}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(row.pendingAmount)}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(row.interestPaid)}
              </Text>
              <Text style={styles.tableCol}>
                {moneyFormatter(row.interestPending)}
              </Text>
            </View>
          ))}

          {/* Summary Row */}
          <View style={styles.summaryRow}>
            <Text style={styles.tableCol}>Total</Text>
            <Text style={styles.tableCol}>-</Text>
            <Text style={styles.tableCol}>
              {moneyFormatter(summary.loanAmount)}
            </Text>
            <Text style={styles.tableCol}>-</Text>
            <Text style={styles.tableCol}>
              {moneyFormatter(summary.paidAmount)}
            </Text>
            <Text style={styles.tableCol}>
              {moneyFormatter(summary.pendingAmount)}
            </Text>
            <Text style={styles.tableCol}>
              {moneyFormatter(summary.interestPaid)}
            </Text>
            <Text style={styles.tableCol}>
              {moneyFormatter(summary.interestPending)}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
