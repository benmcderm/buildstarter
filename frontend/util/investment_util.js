
const InvestmentUtil = {
  fetchInvestments(callback) {
    $.ajax({
      url: "/api/investments",
      dataType: "json",
      success: function(investments) {
        callback(investments);
      },
      error() {
        console.log('Error fetching Investments');
      }
    });
  },

  fetchInvestment(id, callback) {
    $.ajax({
      url: `/api/investments/${id}`,
      dataType: "json",
      success: function(investment) {
        callback(investment)
      },
      error() {
        console.log('Error fetching Investments');
      }
    });
  },

  createInvestment(investment, callback) {
    $.ajax({
      url: `/api/investments`,
      type: "POST",
      data: { investment: investment },
      dataType: "json",
      success: function(resp) {
        callback(resp)
      },
      error() {
        console.log('Error creating Investment');
      }
    });
  },

  updateInvestment(investment, callback) {
    $.ajax({
      url: `/api/investments/${investment.id}`,
      type: "PATCH",
      data: { investment: investment },
      dataType: "json",
      success: function(resp) {
        callback(resp)
      },
      error() {
        console.log('Error updating Investment');
      }
    });
  },

  searchInvestments(search, callback) {
    $.ajax({
      url: "/api/investments",
      data: { search: search },
      success: function (investments) {
        callback(investments)
      }
    });
  }
}

module.exports = InvestmentUtil;
