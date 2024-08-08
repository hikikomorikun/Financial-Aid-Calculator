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
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.<br><br>You will also receive additional $2,000 financial support for living or out-of-pocket expenses.",
                resultDiv: "result-smu",
                wrapperDiv: "wrapper-smu"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://admissions.smu.edu.sg/financial-matters/financial-aid' target='_blank'>here</a>.",
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
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.<br><br>Compulsory Freshmore expenses will be fully covered.",
                resultDiv: "result-sutd",
                wrapperDiv: "wrapper-sutd"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://www.sutd.edu.sg/Admissions/Undergraduate/Financing-Your-Studies/Financial-Options-Financial-Aid/Financial-Aid' target='_blank'>here</a>.",
        resultDiv: "result-sutd",
        wrapperDiv: "wrapper-sutd"
    },
    "NUS": {
        name: "National University of Singapore (NUS)",
        scheme: "NUS Enhanced Financial Scheme",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.<br><br>You will also receive additional $10,000 financial support (over 4 years) for on-campus stay and overseas exposure, additional $4,000 per annum of living expenses."
            },
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && (pci > 750 && pci <= 1100);
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
                resultDiv: "result-nus",
                wrapperDiv: "wrapper-nus"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://nus.edu.sg/oam/financial-aid/overview-eligibility' target='_blank'>here</a>.",
        resultDiv: "result-nus",
        wrapperDiv: "wrapper-nus"
    },
    "SUSS": {
        name: "Singapore University of Social Sciences (SUSS)",
        scheme: "Access Initiative",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
                resultDiv: "result-suss",
                wrapperDiv: "wrapper-suss"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://www.suss.edu.sg/full-time-undergraduate/admissions/financial-aid' target='_blank'>here</a>.",
        resultDiv: "result-suss",
        wrapperDiv: "wrapper-suss"
    },
    "SIT": {
        name: "Singapore Institute of Technology (SIT)",
        scheme: "SIT Forward SITizen Initiative",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
                resultDiv: "result-sit",
                wrapperDiv: "wrapper-sit"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://www.singaporetech.edu.sg/admissions/financial-aid' target='_blank'>here</a>.",
        resultDiv: "result-sit",
        wrapperDiv: "wrapper-sit"
    },
    "NTU": {
        name: "Nanyang Technological University (NTU)",
        scheme: "NTU Enhanced Financial Aid Scheme",
        coverage: "100% coverage",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
                resultDiv: "result-ntu",
                wrapperDiv: "wrapper-ntu"
            },
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && (pci > 750 && pci <= 1100);
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.",
                resultDiv: "result-ntu",
                wrapperDiv: "wrapper-ntu"
            }
        ],
        ineligibleText: "We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options <a href='https://www.ntu.edu.sg/admissions/undergraduate/financial-matters/financial-aid/bursaries' target='_blank'>here</a>.",
        resultDiv: "result-ntu",
        wrapperDiv: "wrapper-ntu"
    }
    // Add more universities as needed
};

// Main form action to calculate and generate eligible results based on selectons
document.getElementById('submit').addEventListener("click", function (e) {
    e.preventDefault();

    // Hide the specified div
    document.getElementById('hideOnSubmit').classList.add('hidden');

    const citizenship = document.getElementById('citizenship').value;
    const housingType = document.getElementById('housingType').value;
    const income = parseFloat(document.getElementById('householdIncome').value);
    const householdMembers = parseInt(document.getElementById('householdMembers').value);

    if (isNaN(income) || isNaN(householdMembers) || householdMembers <= 0) {
        document.getElementById('results').innerHTML = '<p>Please enter valid values for Gross Household Income and Number of Household Members.</p>';
        return;
    }

    const pci = income / householdMembers;
    let hasEligibleUniversity = false;

    for (let key in universityAidInfo) {
        const aidInfo = universityAidInfo[key];
        let eligible = false;
        let eligibilityResult = '';

        for (let criterion of aidInfo.criteria) {
            if (criterion.check(citizenship, housingType, pci)) {
                eligibilityResult= `<p>${criterion.eligibleText}</p>`;
                eligible = true;
                hasEligibleUniversity = true;
                break;
            }
        }

        if (!eligible) {
            eligibilityResult = `<p>${aidInfo.ineligibleText}</p>`;
        }

        const resultDiv = document.getElementById(aidInfo.resultDiv);
        const wrapper = document.getElementById(aidInfo.wrapperDiv);
        resultDiv.innerHTML = eligibilityResult;
        wrapper.classList.remove('hidden');
    }

    if (hasEligibleUniversity) {
        document.getElementById('eligible').classList.remove('hidden');
        document.getElementById('ineligible').classList.add('hidden');
    } else {
        document.getElementById('eligible').classList.add('hidden');
        document.getElementById('ineligible').classList.remove('hidden');
    }
});