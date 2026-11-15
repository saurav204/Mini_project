    let queue = [];
    const avgTimePerPatient = 10;

    function joinQueue() {
      const nameInput = document.getElementById('patientName');
      const name = nameInput.value.trim();
      const msg = document.getElementById('bookingMsg');

      if (name === "") {
        msg.textContent = "Please enter a name.";
        return;
      }

      queue.push({ name });
      nameInput.value = "";
      msg.textContent = `You have been added to the queue, ${name}.`;
      updateQueueDisplay();
    }

    function updateQueueDisplay() {
      const patientsAhead = document.getElementById("patientsAhead");
      const waitTime = document.getElementById("waitTime");
      const queueList = document.getElementById("queueList");

      patientsAhead.textContent = queue.length;
      waitTime.textContent = queue.length * avgTimePerPatient;

      queueList.innerHTML = "";
      queue.forEach((person, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${person.name}`;
        queueList.appendChild(li);
      });
    }

    // Initial render
    updateQueueDisplay();