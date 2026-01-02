import CustomPieChart from "./CustomPieChart.jsx";
import {addThousandsSeparator} from "../util/util.js";
import * as PropTypes from "prop-types";
import {Component} from "react";

class FinanceOverview extends Component {
    render() {
        let {totalBalance, totalIncome, totalExpense} = this.props;
        const COLORS = ["#59168B", "#a0090e", "#016630"];

        const balanceData = [
            {name: "Total Balance", amount: totalBalance},
            {name: "Total Expenses", amount: totalExpense},
            {name: "Total Income", amount: totalIncome},
        ];
        return (
            <div className="card">
                <div className="flex items-center justify-between">
                    <h5 className="text-lg">Financial Overview</h5>
                </div>

                <CustomPieChart
                    data={balanceData}
                    label="Total Balance"
                    totalAmount={`₹${addThousandsSeparator(totalBalance)}`}
                    colors={COLORS}
                    showTextAnchor
                />
            </div>
        )
    }
}

FinanceOverview.propTypes = {
    totalBalance: PropTypes.any,
    totalIncome: PropTypes.any,
    totalExpense: PropTypes.any
}

export default FinanceOverview;