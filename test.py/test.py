doctors_office = {
    'd1': {
        1: {
            "appointments": {
                9: 'p1',
            },
        2: {
            "appointments": {
                10: 'p2'
            }
        }
        }
    },
    'd2': {
        3: {
            "appointments": {
                11: 'p3',
            }
        }
    },
    'd3': {

    }
}

def get_appointments(date: int):
    """
    Returns a list containing every appointment created for a date
     - Each Appointment contains doctor, patient, timeslot
    """
    appointments = []

    counter = 1
    while counter <= len(doctors_office):
        doctor = 'd' + str(counter)
        print(doctors_office[doctor])
        counter += 1
        

get_appointments(1)

def get_availability(date: int):
    """
    Returns a list containing the timeslots that have NOT been booked on a date.
    Would return (total timeslots) x (total doctors) for a day with no appointments
     - Each availableSlot contains doctor, timeslot
    """
    pass

def create_appointment(date: int, timeslot: int, doctor: str, patient: str):
    """
    Returns false if doctor invalid or already booked
    Returns true when the appointment is booked
    """
    pass

