
const InvestmentUtil = {
  fetchInvestments(callback) {
    $.ajax({
      url: "/api/investments",
      dataType: "json",
      success: function(investments) {
        callback(investments);
      },
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
      error(xhr){
      let errors = $.parseJSON(xhr.responseText).errors
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
