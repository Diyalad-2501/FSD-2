var abbr = "https://www.google.com/search?q=good+morning&rlz=1C1YTUH_enIN1105IN1105&oq=good+morning&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIHCAQQABiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIHCAcQABiABDIKCAgQABixAxiABDIKCAkQABixAxiABNIBCDIzODRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"

let q = new URL(abbr)
console.log(`User search ${q.searchParams.get('q')} on ${q.hostname} `)