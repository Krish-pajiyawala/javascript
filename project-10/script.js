 
    let allData = [];

    fetch("https://api.rootnet.in/covid19-in/stats/history")
      .then(res => res.json())
      .then(json => {
        allData = json.data;
      });

    function formatDate(inputDate) {
      const date = new Date(inputDate);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }

    document.getElementById("submitBtn").addEventListener("click", () => {
      const dateValue = document.getElementById("datePicker").value;
      const stateInput = document.getElementById("stateSearch").value.trim().toLowerCase();
      const resultBox = document.getElementById("result");
      const noDataDiv = document.getElementById("noData");

      resultBox.innerHTML = "";

      let selectedData;

      if (dateValue) {
        const selectedDate = formatDate(dateValue);
        selectedData = allData.find(d => d.day === selectedDate);
      } else {
        selectedData = allData[allData.length - 1];
      }

      if (!selectedData) {
        resultBox.style.display = "none";
        noDataDiv.style.display = "block";
        return;
      }

      let html = "";

      
      if (dateValue && !stateInput) {
        html += `
          <div class="summary-card">
            <h3>📊 Summary - ${selectedData.day}</h3>
            <p><strong>Total Confirmed:</strong> ${selectedData.summary.total}</p>
            <p><strong>Indian Cases:</strong> ${selectedData.summary.confirmedCasesIndian}</p>
            <p><strong>Foreign Cases:</strong> ${selectedData.summary.confirmedCasesForeign}</p>
            <p><strong>Recovered:</strong> ${selectedData.summary.discharged}</p>
            <p><strong>Deaths:</strong> ${selectedData.summary.deaths}</p>
          </div>

          <div class="states-container">
        `;

        selectedData.regional.forEach(state => {
          html += `
            <div class="state-card">
              <h4>📍 ${state.loc}</h4>
              <p>Total Confirmed: ${state.totalConfirmed}</p>
              <p>Discharged: ${state.discharged}</p>
              <p>Deaths: ${state.deaths}</p>
            </div>
          `;
        });

        html +=` </div>`;
      }

      
      else if (stateInput) {
        const stateMatch = selectedData.regional.find(
          s => s.loc.toLowerCase().includes(stateInput)
        );

        if (stateMatch) {
          html += `
            <div class="summary-card">
              <h3>📍 ${stateMatch.loc} - ${selectedData.day}</h3>
              <p><strong>Total Confirmed:</strong> ${stateMatch.totalConfirmed}</p>
              <p><strong>Recovered:</strong> ${stateMatch.discharged}</p>
              <p><strong>Deaths:</strong> ${stateMatch.deaths}</p>
            </div>
          `;
        } else {
          resultBox.style.display = "none";
          noDataDiv.style.display = "block";
          return;
        }
      }

      resultBox.innerHTML = html;
      resultBox.style.display = "block";
      noDataDiv.style.display = "none";
    });
  