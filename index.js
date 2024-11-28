// Function to prevent negative numbers
function preventNegativeInput(event) {
    if (event.target.value < 0) {
        event.target.value = ""; // Clear the field if a negative value is entered
        alert("Negative numbers are not allowed."); // Optional alert message
    }
}

// Attach the event listeners
document.getElementById('householdIncome').addEventListener('input', preventNegativeInput);
document.getElementById('householdMembers').addEventListener('input', preventNegativeInput);
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
        resultDiv: "result-smu",
        wrapperDiv: "wrapper-smu",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.<br><br>You will also receive additional $2,000 financial support for living or out-of-pocket expenses."
            }
        ],
        ineligibleText: "<a href='https://admissions.smu.edu.sg/financial-matters/financial-aid' target='_blank'>Singapore Management University (SMU)",
    },
    "SUTD": {
        name: "Singapore University of Technology and Design (SUTD)",
        scheme: "SUTD Education Opportunity Grant",
        coverage: "100% coverage",
        resultDiv: "result-sutd",
        wrapperDiv: "wrapper-sutd",        
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies.<br><br>Compulsory Freshmore expenses will be fully covered."
            }
        ],
        ineligibleText: "<a href='https://www.sutd.edu.sg/Admissions/Undergraduate/Financing-Your-Studies/Financial-Options-Financial-Aid/Financial-Aid' target='_blank'>Singapore University of Technology and Design (SUTD)</a>.",
    },
    "NUS": {
        name: "National University of Singapore (NUS)",
        scheme: "NUS Enhanced Financial Scheme",
        coverage: "100% coverage",
        resultDiv: "result-nus",
        wrapperDiv: "wrapper-nus",
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
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies."
            }
        ],
        ineligibleText: "<a href='https://nus.edu.sg/oam/financial-aid/overview-eligibility' target='_blank'>National University of Singapore (NUS)</a>.",
    },
    "SUSS": {
        name: "Singapore University of Social Sciences (SUSS)",
        scheme: "Access Initiative",
        coverage: "100% coverage",
        resultDiv: "result-suss",
        wrapperDiv: "wrapper-suss",        
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies."
            }
        ],
        ineligibleText: "<a href='https://www.suss.edu.sg/full-time-undergraduate/admissions/financial-aid' target='_blank'>Singapore University of Social Sciences (SUSS)</a>.",
    },
    "SIT": {
        name: "Singapore Institute of Technology (SIT)",
        scheme: "SIT Forward SITizen Initiative",
        coverage: "100% coverage",
        resultDiv: "result-sit",
        wrapperDiv: "wrapper-sit",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies."
            }
        ],
        ineligibleText: "<a href='https://www.singaporetech.edu.sg/admissions/financial-aid' target='_blank'>Singapore Institute of Technology (SIT)</a>.",
    },
    "NTU": {
        name: "Nanyang Technological University (NTU)",
        scheme: "NTU Enhanced Financial Aid Scheme",
        coverage: "100% coverage",
        resultDiv: "result-ntu",
        wrapperDiv: "wrapper-ntu",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 750;
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies."
            },
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && (pci > 750 && pci <= 1100);
                },
                eligibleText: "100% tuition fee coverage after taking into account all scholarships, bursaries and Government tuition fee subsidies."
            }
        ],
        ineligibleText: "<a href='https://www.ntu.edu.sg/admissions/undergraduate/financial-matters/financial-aid/bursaries' target='_blank'>Nanyang Technological University (NTU)</a>.",
    },
    "Mendaki": {
        name: "Yayasan MENDAKI",
        scheme: "Tertiary Tuition Fee Subsidy (TTFS) Scheme",
        coverage: "100% coverage",
        resultDiv: "result-mendaki",
        wrapperDiv: "wrapper-mendaki",
        criteria: [
            {
                check: function(citizenship, housingType, pci) {
                    return citizenship === 'Singapore Citizen' && (housingType === 'HDB 1 or 2 room flat' || housingType === 'HDB 3-room flat' || housingType === 'HDB 4-room flat') && pci <= 1400;
                },
                eligibleText: "Malay Singaporean / Singapore PR students whose PCI is < $1,400 can apply for 100% tuition fee coverage.",
            }
        ],
        ineligibleText: "<a href='https://www.mendaki.org.sg/assistance_landing/tertiary-tuition-fee-subsidy-ttfs' target='_blank'>Yayasan MENDAKI</a>.",
    }
    // Add more universities as needed
};

document.getElementById('submit').addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById('hideOnSubmit').classList.add('hidden');

    const citizenship = document.getElementById('citizenship').value;
    const housingType = document.getElementById('housingType').value;
    const income = parseFloat(document.getElementById('householdIncome').value);
    const householdMembers = parseInt(document.getElementById('householdMembers').value);

    // Check for empty fields
    if (!citizenship || !housingType || !income || !householdMembers) {
        alert('Please fill in all required fields before submitting the form.');
        return;
    }

    // Ensure income and householdMembers are valid numbers
    const incomeValue = parseFloat(income);
    const householdMembersValue = parseInt(householdMembers);

    if (isNaN(incomeValue) || isNaN(householdMembersValue) || householdMembersValue <= 0) {
        alert('Please enter valid values for Gross Household Income and Number of Household Members.');
        return;
    }

    const pci = income / householdMembers;
    let eligibleUniversities = [];
    let ineligibleUniversities = [];

    for (let key in universityAidInfo) {
        const aidInfo = universityAidInfo[key];
        let eligible = false;
        let eligibilityResult = '';

        for (let criterion of aidInfo.criteria) {
            if (criterion.check(citizenship, housingType, pci)) {
                eligibilityResult = `<p>${criterion.eligibleText}</p>`;
                eligible = true;
                eligibleUniversities.push(aidInfo.name);
                break;
            }
        }

        if (!eligible) {
            ineligibleUniversities.push({
                name: aidInfo.name,
                link: aidInfo.ineligibleText.match(/href='([^']+)'/)[1],
            });
        }

        const resultDiv = document.getElementById(aidInfo.resultDiv);
        const wrapper = document.getElementById(aidInfo.wrapperDiv);
        if (resultDiv && wrapper) {
            resultDiv.innerHTML = eligible ? eligibilityResult : '';
            wrapper.classList.toggle('hidden', !eligible);
        }
    }

    const resultsDiv = document.getElementById('results');
    const eligibleDiv = document.getElementById('eligible');
    const ineligibleDiv = document.getElementById('ineligible');

    if (eligibleUniversities.length === 0) {
        eligibleDiv.classList.add('hidden');
        ineligibleDiv.classList.remove('hidden');

        const ineligibleMessage = `
        <p>We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options at these universities:</p>
        <p>
            ${ineligibleUniversities.map(u => `<a href="${u.link}" target="_blank" class="ineligible-link">${u.name}</a>`).join('')}
        </p>
    `;
        resultsDiv.innerHTML = ineligibleMessage;
    } else {
        eligibleDiv.classList.remove('hidden');
        ineligibleDiv.classList.remove('hidden');

        const filteredIneligibleUniversities = ineligibleUniversities.filter(
            u => !eligibleUniversities.includes(u.name)
        );

        if (filteredIneligibleUniversities.length > 0) {
            const ineligibleMessage = `
                <p>We are sorry that you do not meet the eligibility criteria for the University Access initiative. However, you may still be eligible for other financial aid options at these universities:</p>
                <p>${filteredIneligibleUniversities.map(u => `<a href="${u.link}" target="_blank" class="ineligible-link">${u.name}</a>`).join('<br>')}</p>
            `;
            resultsDiv.innerHTML = ineligibleMessage;
        } else {
            ineligibleDiv.classList.add('hidden');
        }
    }
});