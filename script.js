tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            cyan: '#00f0ff',
                            blue: '#0066ff',
                            darkBlue: '#001a33',
                            slate: '#0a192f',
                            accent: '#00f2fe'
                        }
                    }
                }
            }
        }

// Form confirmation management with custom panels
        function handleFormSubmission(event) {
            event.preventDefault();
            
            // Capture field inputs
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const email = document.getElementById('form-email').value;
            const service = document.getElementById('form-services').value;
            const notes = document.getElementById('form-notes').value;

            // Log parameters mock database storage
            console.log("Captured Lead Parameters:", { name, phone, email, service, notes });

            // Swap visual panels
            document.getElementById('form-container').classList.add('hidden');
            document.getElementById('success-container').classList.remove('hidden');
        }

        function resetContactForm() {
            document.getElementById('lead-form').reset();
            document.getElementById('form-container').classList.remove('hidden');
            document.getElementById('success-container').classList.add('hidden');
        }