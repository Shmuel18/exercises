abstract class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  talk() {
    console.log("Talking…");
  }
}

class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }

  talk() {
    // super.talk();
    console.log(this.firstName, this.lastName, this.patientID);
  }
}

class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }

  doctorsDetails = () => {
    console.log(
      this.firstName,
      this.lastName,
      this.doctorID,
      this.specialization
    );
  };
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }

  talk() {
    console.log(this.patient, this.doctor, this.date, this.time);
  }
}

class Hospital {
  Patients: Patient[];
  Doctors: Doctor[];
  queues: Appointment[];
  name: string;
  constructor(
    Patients: Patient[],
    Doctors: Doctor[],
    queues: Appointment[],
    name: string
  ) {
    this.name = name;
    this.Patients = Patients;
    this.Doctors = Doctors;
    this.queues = queues;
  }

  AddingPatient = (Patient: Patient) => {
    this.Patients.push(Patient);
  };

  AddingDoctor = (Doctor: Doctor) => {
    this.Doctors.push(Doctor);
  };

  AddingQueue = (queue: Appointment) => {
    this.queues.push(queue);
  };

  detailsAllQueues = (queues: Appointment[]) => {
    queues.forEach((element) => {
      element.talk();
    });
  };

  detailsueuesDoctorByID = (ID: number) => {
    this.queues.forEach((element) => {
      if (element.doctor.doctorID === ID) {
        console.log(element);
      }
    });
  };

  detailsueuesPatientByID = (ID: number) => {
    this.queues.forEach((element) => {
      if (element.patient.patientID === ID) {
        console.log(element);
      }
    });
  };
  detailsAppointmentsToday = (Today: string) => {
    this.queues.forEach((element) => {
      if (element.time === Today) {
        console.log(element);
      }
    });
  };
}

const Patient1 = new Patient("go", "baidn", 1);
const Patient2 = new Patient("Donald", "Trump", 2);
const Doctor1 = new Doctor("bibi", "netanyahu", 1, "tahmanot");
const Doctor2 = new Doctor("Yair", "Lapid", 2, "holes");
const Appointment1 = new Appointment(
  Patient1,
  Doctor1,
  "Appointment",
  "28/08/2023"
);
const Appointment2 = new Appointment(
  Patient2,
  Doctor2,
  "Appointment",
  "28/08/2023"
);
const Hospital1 = new Hospital(
  [Patient1, Patient2],
  [Doctor1, Doctor2],
  [Appointment1, Appointment2],
  "Tel ha shomer"
);
Hospital1.detailsAppointmentsToday("28/08/2023");
Hospital1.detailsueuesDoctorByID(2);
