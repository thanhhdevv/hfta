// Tab switching
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const id = tab.dataset.tab;
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  });
});

// Chart demo
const ctx = document.getElementById('quantChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
      datasets: [{
        label: 'BTC/USD',
        data: [67000, 67500, 67200, 68000, 68500, 69000, 68800],
        borderColor: '#ffb300',
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(255, 230, 150, 0.3)'
      }]
    },
    options: { responsive: true }
  });
}

// AI Console demo
const runAIButton = document.getElementById("runAI");
if (runAIButton) {
    runAIButton.onclick = () => {
    const input = document.getElementById("aiInput").value;
    const output = document.getElementById("aiOutput");
    if (!input) return;
    output.innerHTML = `<b>Bạn:</b> ${input}<br><b>AI:</b> Dữ liệu đang được xử lý, vui lòng chờ... 🔄`;
    setTimeout(() => {
        output.innerHTML = `<b>AI:</b> Theo phân tích mô phỏng, khả năng BTC tăng trong 4h tới là 71%.`;
    }, 1500);
    };
}


// Xuất PDF demo
const exportPDFButton = document.getElementById("exportPDF");
if (exportPDFButton) {
    exportPDFButton.onclick = () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.text("BÁO CÁO AI INVESTMENT BRAIN", 10, 10);
    pdf.text("Tổng hợp dữ liệu mô phỏng BTC", 10, 20);
    pdf.text("Xác suất tăng: 71%", 10, 30);
    pdf.text("Khuyến nghị: Long 20% vốn", 10, 40);
    pdf.save("AI_Investment_Report.pdf");
    };
}