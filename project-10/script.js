    let allData = [];

    // Load data
    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then(res => res.json())
      .then(json => {
        allData = json.data;
      });

    // On submit button click
    document.getElementById("submitBtn").addEventListener("click", () => {
      const selectedDate = document.getElementById("datePicker").value;
      const resultBox = document.getElementById("result");
      const noDataDiv = document.getElementById("noData");

      const found = allData.find(d => d.day === selectedDate);

      if (found) {
        let html = `
          <div class="summary-card">
            <h3>📊 Summary - ${found.day}</h3>
            <p><strong>Total Confirmed:</strong> ${found.summary.total}</p>
            <p><strong>Indian Cases:</strong> ${found.summary.confirmedCasesIndian}</p>
            <p><strong>Foreign Cases:</strong> ${found.summary.confirmedCasesForeign}</p>
            <p><strong>Recovered:</strong> ${found.summary.discharged}</p>
            <p><strong>Deaths:</strong> ${found.summary.deaths}</p>
          </div>

          <div class="states-container">
        `;

        found.regional.forEach(state => {
          html += `
            <div class="state-card">
              <h4>📍 ${state.loc}</h4>
              <p>Total Confirmed: ${state.totalConfirmed}</p>
              <p>Discharged: ${state.discharged}</p>
              <p>Deaths: ${state.deaths}</p>
            </div>
          `;
        });

        html += `</div>`;
        resultBox.innerHTML = html;
        resultBox.style.display = "block";
        noDataDiv.style.display = "none";
      } else {
        resultBox.style.display = "none";
        noDataDiv.style.display = "block";
      }
    });
