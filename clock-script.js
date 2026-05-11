// Comprehensive list of timezones
const TIMEZONES = [
    // North America
    { name: 'America/New_York', region: 'Eastern Time', offset: 'UTC-5/-4' },
    { name: 'America/Chicago', region: 'Central Time', offset: 'UTC-6/-5' },
    { name: 'America/Denver', region: 'Mountain Time', offset: 'UTC-7/-6' },
    { name: 'America/Los_Angeles', region: 'Pacific Time', offset: 'UTC-8/-7' },
    { name: 'America/Anchorage', region: 'Alaska Time', offset: 'UTC-9/-8' },
    { name: 'Pacific/Honolulu', region: 'Hawaii Time', offset: 'UTC-10' },
    { name: 'America/Toronto', region: 'Eastern Canada', offset: 'UTC-5/-4' },
    { name: 'America/Vancouver', region: 'Pacific Canada', offset: 'UTC-8/-7' },
    { name: 'America/Mexico_City', region: 'Central Mexico', offset: 'UTC-6/-5' },
    
    // South America
    { name: 'America/Buenos_Aires', region: 'Argentina', offset: 'UTC-3' },
    { name: 'America/Sao_Paulo', region: 'Brazil', offset: 'UTC-3/-2' },
    { name: 'America/Lima', region: 'Peru', offset: 'UTC-5' },
    { name: 'America/Bogota', region: 'Colombia', offset: 'UTC-5' },
    { name: 'America/Santiago', region: 'Chile', offset: 'UTC-3/-4' },
    
    // Europe
    { name: 'Europe/London', region: 'United Kingdom', offset: 'UTC+0/+1' },
    { name: 'Europe/Paris', region: 'France', offset: 'UTC+1/+2' },
    { name: 'Europe/Berlin', region: 'Germany', offset: 'UTC+1/+2' },
    { name: 'Europe/Rome', region: 'Italy', offset: 'UTC+1/+2' },
    { name: 'Europe/Madrid', region: 'Spain', offset: 'UTC+1/+2' },
    { name: 'Europe/Amsterdam', region: 'Netherlands', offset: 'UTC+1/+2' },
    { name: 'Europe/Brussels', region: 'Belgium', offset: 'UTC+1/+2' },
    { name: 'Europe/Vienna', region: 'Austria', offset: 'UTC+1/+2' },
    { name: 'Europe/Zurich', region: 'Switzerland', offset: 'UTC+1/+2' },
    { name: 'Europe/Prague', region: 'Czech Republic', offset: 'UTC+1/+2' },
    { name: 'Europe/Budapest', region: 'Hungary', offset: 'UTC+1/+2' },
    { name: 'Europe/Warsaw', region: 'Poland', offset: 'UTC+1/+2' },
    { name: 'Europe/Stockholm', region: 'Sweden', offset: 'UTC+1/+2' },
    { name: 'Europe/Oslo', region: 'Norway', offset: 'UTC+1/+2' },
    { name: 'Europe/Copenhagen', region: 'Denmark', offset: 'UTC+1/+2' },
    { name: 'Europe/Athens', region: 'Greece', offset: 'UTC+2/+3' },
    { name: 'Europe/Istanbul', region: 'Turkey', offset: 'UTC+3' },
    { name: 'Europe/Moscow', region: 'Russia', offset: 'UTC+3' },
    
    // Africa
    { name: 'Africa/Cairo', region: 'Egypt', offset: 'UTC+2/+3' },
    { name: 'Africa/Johannesburg', region: 'South Africa', offset: 'UTC+2' },
    { name: 'Africa/Lagos', region: 'Nigeria', offset: 'UTC+1' },
    { name: 'Africa/Nairobi', region: 'Kenya', offset: 'UTC+3' },
    { name: 'Africa/Casablanca', region: 'Morocco', offset: 'UTC+0/+1' },
    { name: 'Africa/Algiers', region: 'Algeria', offset: 'UTC+1' },
    { name: 'Africa/Tunis', region: 'Tunisia', offset: 'UTC+1' },
    { name: 'Africa/Addis_Ababa', region: 'Ethiopia', offset: 'UTC+3' },
    
    // Asia
    { name: 'Asia/Tokyo', region: 'Japan', offset: 'UTC+9' },
    { name: 'Asia/Seoul', region: 'South Korea', offset: 'UTC+9' },
    { name: 'Asia/Shanghai', region: 'China', offset: 'UTC+8' },
    { name: 'Asia/Hong_Kong', region: 'Hong Kong', offset: 'UTC+8' },
    { name: 'Asia/Bangkok', region: 'Thailand', offset: 'UTC+7' },
    { name: 'Asia/Singapore', region: 'Singapore', offset: 'UTC+8' },
    { name: 'Asia/Jakarta', region: 'Indonesia', offset: 'UTC+7' },
    { name: 'Asia/Manila', region: 'Philippines', offset: 'UTC+8' },
    { name: 'Asia/Kolkata', region: 'India', offset: 'UTC+5:30' },
    { name: 'Asia/Karachi', region: 'Pakistan', offset: 'UTC+5' },
    { name: 'Asia/Dubai', region: 'UAE', offset: 'UTC+4' },
    { name: 'Asia/Bangkok', region: 'Bangkok', offset: 'UTC+7' },
    { name: 'Asia/Ho_Chi_Minh', region: 'Vietnam', offset: 'UTC+7' },
    { name: 'Asia/Kuala_Lumpur', region: 'Malaysia', offset: 'UTC+8' },
    { name: 'Asia/Jerusalem', region: 'Israel', offset: 'UTC+2/+3' },
    { name: 'Asia/Tehran', region: 'Iran', offset: 'UTC+3:30' },
    { name: 'Asia/Kabul', region: 'Afghanistan', offset: 'UTC+4:30' },
    
    // Middle East
    { name: 'Asia/Riyadh', region: 'Saudi Arabia', offset: 'UTC+3' },
    { name: 'Asia/Baghdad', region: 'Iraq', offset: 'UTC+3' },
    
    // Oceania
    { name: 'Australia/Sydney', region: 'Australia East', offset: 'UTC+10/+11' },
    { name: 'Australia/Melbourne', region: 'Australia East', offset: 'UTC+10/+11' },
    { name: 'Australia/Brisbane', region: 'Australia', offset: 'UTC+10' },
    { name: 'Australia/Perth', region: 'Australia West', offset: 'UTC+8' },
    { name: 'Australia/Adelaide', region: 'Australia', offset: 'UTC+9:30/+10:30' },
    { name: 'Pacific/Auckland', region: 'New Zealand', offset: 'UTC+12/+13' },
    { name: 'Pacific/Fiji', region: 'Fiji', offset: 'UTC+12/+13' },
    { name: 'Pacific/Tongatapu', region: 'Tonga', offset: 'UTC+13/+14' }
];

let clocks = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    addDefaultClocks();
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
});

// Setup Event Listeners
function setupEventListeners() {
    const addBtn = document.getElementById('addBtn');
    const timezoneInput = document.getElementById('timezoneInput');
    const suggestionsList = document.getElementById('suggestionsList');
    
    addBtn.addEventListener('click', addTimezone);
    timezoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTimezone();
    });
    
    timezoneInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value, suggestionsList);
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.timezone-input') && !e.target.closest('.suggestions')) {
            suggestionsList.classList.remove('active');
        }
    });
    
    // Preset timezone buttons
    document.querySelectorAll('.btn-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const timezone = btn.dataset.timezone;
            addClockCard(timezone);
            document.getElementById('timezoneInput').value = '';
        });
    });
}

// Add Default Clocks
function addDefaultClocks() {
    const defaultTimezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo'
    ];
    
    defaultTimezones.forEach(tz => addClockCard(tz));
}

// Add Timezone
function addTimezone() {
    const input = document.getElementById('timezoneInput');
    const timezone = input.value.trim();
    
    if (!timezone) {
        showAlert('Please enter a timezone');
        return;
    }
    
    const validTimezone = TIMEZONES.find(tz => 
        tz.name.toLowerCase() === timezone.toLowerCase()
    );
    
    if (!validTimezone) {
        showAlert('Invalid timezone. Try America/New_York or Europe/London');
        return;
    }
    
    if (clocks.find(c => c.timezone === validTimezone.name)) {
        showAlert('This timezone is already added');
        return;
    }
    
    addClockCard(validTimezone.name);
    input.value = '';
    document.getElementById('suggestionsList').classList.remove('active');
}

// Add Clock Card
function addClockCard(timezone) {
    const timezoneData = TIMEZONES.find(tz => tz.name === timezone);
    if (!timezoneData) return;
    
    const clock = {
        timezone: timezone,
        id: Date.now() + Math.random()
    };
    
    clocks.push(clock);
    renderClocks();
}

// Remove Clock
function removeClock(id) {
    clocks = clocks.filter(c => c.id !== id);
    renderClocks();
}

// Render Clocks
function renderClocks() {
    const grid = document.getElementById('clocksGrid');
    
    if (clocks.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h2>No timezones added yet</h2>
                <p>Search or use preset buttons to add a timezone</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = clocks.map(clock => {
        const timezoneData = TIMEZONES.find(tz => tz.name === clock.timezone);
        return `
            <div class="clock-card" id="clock-${clock.id}">
                <div class="timezone-name">${timezoneData.name.split('/')[1].replace(/_/g, ' ')}</div>
                <div class="region-info">${timezoneData.region}</div>
                <div class="digital-time" id="time-${clock.id}">--:--:--</div>
                <div class="time-period" id="period-${clock.id}">--</div>
                <div class="additional-info">
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        <span class="info-value" id="date-${clock.id}">--/--/--</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Offset</span>
                        <span class="info-value">${timezoneData.offset}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Day of Week</span>
                        <span class="info-value" id="day-${clock.id}">---</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Week</span>
                        <span class="info-value" id="week-${clock.id}">--</span>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeClock(${clock.id})">Remove</button>
            </div>
        `;
    }).join('');
}

// Update All Clocks
function updateAllClocks() {
    clocks.forEach(clock => {
        updateClock(clock);
    });
}

// Update Individual Clock
function updateClock(clock) {
    const now = new Date();
    
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: clock.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: clock.timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        
        const dayFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: clock.timezone,
            weekday: 'long'
        });
        
        const time = formatter.format(now);
        const date = dateFormatter.format(now);
        const day = dayFormatter.format(now);
        
        // Get the local time in that timezone for accurate calculations
        const tzDate = new Date(now.toLocaleString('en-US', { timeZone: clock.timezone }));
        const weekNumber = getWeekNumber(tzDate);
        const isPM = parseInt(time.split(':')[0]) >= 12;
        
        // Update DOM elements
        const timeEl = document.getElementById(`time-${clock.id}`);
        const periodEl = document.getElementById(`period-${clock.id}`);
        const dateEl = document.getElementById(`date-${clock.id}`);
        const dayEl = document.getElementById(`day-${clock.id}`);
        const weekEl = document.getElementById(`week-${clock.id}`);
        
        if (timeEl) timeEl.textContent = time;
        if (periodEl) periodEl.textContent = isPM ? 'PM' : 'AM';
        if (dateEl) dateEl.textContent = date;
        if (dayEl) dayEl.textContent = day;
        if (weekEl) weekEl.textContent = `W${weekNumber}`;
        
    } catch (e) {
        console.error('Error updating clock:', e);
    }
}

// Get Week Number
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Show Suggestions
function showSuggestions(query, container) {
    if (!query) {
        container.classList.remove('active');
        return;
    }
    
    const filtered = TIMEZONES.filter(tz =>
        tz.name.toLowerCase().includes(query.toLowerCase()) ||
        tz.region.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
    
    if (filtered.length === 0) {
        container.classList.remove('active');
        return;
    }
    
    container.innerHTML = filtered.map(tz => `
        <div class="suggestion-item" onclick="selectSuggestion('${tz.name}')">
            <span class="suggestion-timezone">${tz.name}</span>
            <span class="suggestion-offset">${tz.offset}</span>
        </div>
    `).join('');
    
    container.classList.add('active');
}

// Select Suggestion
function selectSuggestion(timezone) {
    if (clocks.find(c => c.timezone === timezone)) {
        showAlert('This timezone is already added');
        return;
    }
    
    addClockCard(timezone);
    document.getElementById('timezoneInput').value = '';
    document.getElementById('suggestionsList').classList.remove('active');
}

// Show Alert
function showAlert(message) {
    alert(message);
}
