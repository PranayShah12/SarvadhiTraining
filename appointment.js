window.addEventListener("DOMContentLoaded", () => {
    const task = JSON.parse(localStorage.getItem("task"));

    if (task && task.length > 0) {
        // Sort the task array based on date and time
        task.sort((a, b) => {
            const dateA = new Date(a.appDate + " " + a.frtime);
            const dateB = new Date(b.appDate + " " + b.frtime);
            return dateA - dateB;
        });

        const tabledata = document.getElementById("tabledata");

        for (let i = 0; i < task.length; i++) {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td>${i + 1}</td>
          <td>${task[i].name}</td>
          <td>${task[i].mail_id}</td>
          <td>${task[i].appDate}</td>
          <td>${task[i].frtime}</td>
          <td>${task[i].time}</td>
          <td>${task[i].Despvalue}</td>
        `;
            tabledata.appendChild(row);
        }
    }
});
