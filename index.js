document.getElementById('householdIncome').addEventListener('input', updatePCI);
document.getElementById('householdMembers').addEventListener('input', updatePCI);
document.getElementById('selectAll').addEventListener('change', toggleAllCheckboxes);

// Dynamically update the value of #pciValue when household income and household members are filled
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

// Toggle all universities checkboxes to be checked and unchecked
function toggleAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="universities"]:not(#selectAll)');
    const selectAll = document.getElementById('selectAll').checked;

    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll;
    });
}

const universityAidInfo = {
    "SMU": {
        name: "Singapore Management University (SMU)",
        scheme: "SMU Access",
        coverage: "100% coverage"
    },
    "SUTD": {
        name: "Singapore University of Technology and Design (SUTD)",
        scheme: "SUTD Education Opportunity Grant",
        coverage: "100% coverage"
    },
    "NUS": {
        name: "National University of Singapore (NUS)",
        scheme: "NUS Enhanced Financial Scheme",
        coverage: "100% coverage"
    },
    "SUSS": {
        name: "Singapore University of Social Sciences (SUSS)",
        scheme: "Access Initiative",
        coverage: "100% coverage"
    },
    "SIT": {
        name: "Singapore Institute of Technology (SIT)",
        scheme: "SIT Forward SITizen Initiative",
        coverage: "100% coverage"
    },
    "NTU": {
        name: "Nanyang Technological University (NTU)",
        scheme: "NTU Enhanced Financial Aid Scheme",
        coverage: "100% coverage"
    }
    // Add more universities as needed
};

// Main form action to calculate and generate eligible results based on selectons
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

    const isEligible = (citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat') && pci <= 750);
    
    if(isEligible){
        results += `<p>Eligible for the following Uni Access below.</p>`;
        universities.forEach(university => {
            const aidInfo = universityAidInfo[university];
            if (aidInfo) {
                results += `<p><br>${aidInfo.name}<br>${aidInfo.scheme}<br>${aidInfo.coverage}<br></p>`;
            }
        });
    } else {
        results += `<p>Not eligible for Uni Access. Here are some other useful resources for your reference.<br><a href="#">Link 1</a><br><a href="#">Link 2</a><br><a href="#">Link 3</a></p>`;
    }

    document.getElementById('results').innerHTML = results;
});