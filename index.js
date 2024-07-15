document.getElementById('householdIncome').addEventListener('input', updatePCI);
document.getElementById('householdMembers').addEventListener('input', updatePCI);
document.getElementById('selectAll').addEventListener('change', toggleAllCheckboxes);

function updatePCI() {
    const incomeInput = document.getElementById('householdIncome');
    const householdMembersInput = document.getElementById('householdMembers');
    
    const income = parseFloat(incomeInput.value);
    const householdMembers = parseInt(householdMembersInput.value);

    if (isNaN(income) || isNaN(householdMembers) || householdMembers <= 0) {
        document.getElementById('pciValue').innerText = '0';
        return;
    }
    
    const pci = income / householdMembers;
    document.getElementById('pciValue').innerText = pci.toFixed(2); // Display PCI with two decimal places
}

function toggleAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="universities"]:not(#selectAll)');
    const selectAll = document.getElementById('selectAll').checked;

    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll;
    });
}

document.getElementById('submit').addEventListener("click", function (e) {
    e.preventDefault();

    const citizenship = document.getElementById('citizenship').value;
    const housingType = document.getElementById('housingType').value;
    const income = parseFloat(document.getElementById('householdIncome').value);
    const householdMembers = parseInt(document.getElementById('householdMembers').value);
    const universities = Array.from(document.querySelectorAll('input[name="universities"]:checked')).map(el => el.value);

    if (isNaN(income) || isNaN(householdMembers) || householdMembers <= 0) {
        document.getElementById('results').innerHTML = '<p>Please enter valid values for Gross Household Income and Number of Household Members.</p>';
        return;
    }

    const pci = income / householdMembers;
    let results = `<p>Gross Monthly Household Per Capita Income (PCI): $${pci.toFixed(2)}</p>`;

    if (citizenship === 'Singapore Citizen' && housingType === 'HDB 1 or 2 room flat' && pci <= 750) {
        results += `<p>Eligible for Financial Aid.</p>`;
    } else {
        results += `<p>Not eligible for Financial Aid.</p>`;
    }

    universities.forEach(university => {
        results += `<p>Based on your selection, you can apply to ${university}.</p>`;
    });

    document.getElementById('results').innerHTML = results;
});