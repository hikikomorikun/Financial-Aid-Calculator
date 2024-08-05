document.getElementById('householdIncome').addEventListener('input', updatePCI);
document.getElementById('householdMembers').addEventListener('input', updatePCI);

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

const universityAidInfo = {
    "SMU": {
        name: "Singapore Management University (SMU)",
        scheme: "SMU Access",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat') && pci <= 750;
                },
                eligibleText: "Eligible for SMU Access.",
                resultDiv: "result-smu",
                wrapperDiv: "wrapper-smu"
            }
        ],
        ineligibleText: "Not eligible for SMU Access.",
        resultDiv: "result-smu",
        wrapperDiv: "wrapper-smu"
    },
    "SUTD": {
        name: "Singapore University of Technology and Design (SUTD)",
        scheme: "SUTD Education Opportunity Grant",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "Eligible for SUTD Education Opportunity Grant.",
                resultDiv: "result-sutd",
                wrapperDiv: "wrapper-sutd"
            }
        ],
        ineligibleText: "Not eligible for SUTD Education Opportunity Grant.",
        resultDiv: "result-sutd",
        wrapperDiv: "wrapper-sutd"
    },
    "NUS": {
        name: "National University of Singapore (NUS)",
        scheme: "NUS Enhanced Financial Scheme",
        coverage: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies. You will also receive additional $10,000 financial support (over 4 years) for on-campus stay and overseas exposure and additional $4,000 per annum of living expenses.",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage + additional benefits"
            },
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && (750 <= pci <= 1100);
                },
                eligibleText: "100% tuition fee coverage",
                resultDiv: "result-nus",
                wrapperDiv: "wrapper-nus"
            }
        ],
        ineligibleText: "Not eligible for NUS Enhanced Financial Scheme.",
        resultDiv: "result-nus",
        wrapperDiv: "wrapper-nus"
    },
    "SUSS": {
        name: "Singapore University of Social Sciences (SUSS)",
        scheme: "Access Initiative",
        coverage: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "Eligible for SUSS Access Initiative.",
                resultDiv: "result-suss",
                wrapperDiv: "wrapper-suss"
            }
        ],
        ineligibleText: "Not eligible for SUSS Access Initiative.",
        resultDiv: "result-suss",
        wrapperDiv: "wrapper-suss"
    },
    "SIT": {
        name: "Singapore Institute of Technology (SIT)",
        scheme: "SIT Forward SITizen Initiative",
        coverage: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "Eligible for SIT Forward SITizen Initiative.",
                resultDiv: "result-sit",
                wrapperDiv: "wrapper-sit"
            }
        ],
        ineligibleText: "Not eligible for SIT Forward SITizen Initiative.",
        resultDiv: "result-sit",
        wrapperDiv: "wrapper-sit"
    },
    "NTU": {
        name: "Nanyang Technological University (NTU)",
        scheme: "NTU Enhanced Financial Aid Scheme",
        coverage: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "Eligible for NTU Enhanced Financial Aid Scheme. Criteria 1",
                resultDiv: "result-ntu",
                wrapperDiv: "wrapper-ntu"
            },
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && (750 <= pci <= 1100);
                },
                eligibleText: "Eligible for NTU Enhanced Financial Aid Scheme. Criteria 2",
                resultDiv: "result-ntu",
                wrapperDiv: "wrapper-ntu"
            }
        ],
        ineligibleText: "Not eligible for SMU Access.",
        resultDiv: "result-ntu",
        wrapperDiv: "wrapper-ntu"
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

    if (isNaN(income) || isNaN(householdMembers) || householdMembers <= 0) {
        document.getElementById('results').innerHTML = '<p>Please enter valid values for Gross Household Income and Number of Household Members.</p>';
        return;
    }

    const pci = income / householdMembers;
    let mainEligibilityResult = `<p>Gross Monthly Household Per Capita Income (PCI): $${pci.toFixed(2)}</p>`;
    let hasEligibleUniversity = false;

    for (let key in universityAidInfo) {
        const aidInfo = universityAidInfo[key];
        let eligible = false;
        let eligibilityResult = '';

        for (let criterion of aidInfo.criteria) {
            if (criterion.check(citizenship, housingType, pci)) {
                eligibilityResult= `<p>${aidInfo.name}<br>${aidInfo.scheme}<br>${aidInfo.coverage}<br>${criterion.eligibleText}</p><br><br>`;
                eligible = true;
                hasEligibleUniversity = true;
                break;
            }
        }

        if (!eligible) {
            eligibilityResult = `<p>${aidInfo.name}<br>${aidInfo.scheme}<br>${aidInfo.ineligibleText}</p><br><br>`;
        }

        const resultDiv = document.getElementById(aidInfo.resultDiv);
        const wrapper = document.getElementById(aidInfo.wrapperDiv);
        resultDiv.innerHTML = eligibilityResult;

        if (eligible) {
            wrapper.classList.remove('hidden');
        } else {
            wrapper.classList.add('hidden');
        }
    }

    if (hasEligibleUniversity) {
        mainEligibilityResult += `<p>Congratulations! You're eligible for the following financial aid packages, including the Quantedge Foundation award (only if all criteria is met), at the respective autonomous universities:</p>`;
        document.getElementById('eligible').classList.remove('hidden');
        document.getElementById('ineligible').classList.add('hidden');
    } else {
        mainEligibilityResult += `<p>You do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options at:</p>`;
        document.getElementById('eligible').classList.add('hidden');
        document.getElementById('ineligible').classList.remove('hidden');
    }

    document.getElementById('results').innerHTML = mainEligibilityResult;

});