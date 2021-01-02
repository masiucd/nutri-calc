export interface Student {
  id: number
  name: string
  paid: boolean
}

const deepJs = defineWorkshop()
deepJs.addStudent({ id: 313, name: "Frank", paid: true })
deepJs.addStudent({ id: 410, name: "Suzy", paid: true })
deepJs.addStudent({ id: 709, name: "Brian", paid: false })
deepJs.addStudent({ id: 502, name: "Mary", paid: true })
deepJs.addStudent({ id: 664, name: "Bob", paid: false })
deepJs.addStudent({ id: 250, name: "Peter", paid: true })
deepJs.addStudent({ id: 375, name: "Sarah", paid: true })
deepJs.addStudent({ id: 867, name: "Greg", paid: false })
deepJs.printStudents()
deepJs.enrollStudent(313)
deepJs.enrollStudent(664)
deepJs.printEnrolledStudents()
console.log(deepJs.printEnrolledStudents())

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/

export function defineWorkshop() {
  const currentEnrollment: number[] = []
  const studentRecords: Student[] = []

  const addStudent = (student: Student) => {
    studentRecords.push(student)
  }

  const printStudents = () => {
    print(studentRecords, (s: Student) => {
      let str = `#id ${s.id} Name: ${s.name}, paid=${s.paid ? "yes" : "no"}`
      console.log(str)
    })
  }

  const printEnrolledStudents = () => {
    return currentEnrollment.map(s => {
      let student = studentRecords.find(x => {
        return x.id === s ? x : null
      })
      return student
    })
  }

  const print = (list: Array<Student | number>, fn: (s: any) => any | (() => void)) => {
    list.forEach(fn)
  }

  function enrollStudent(id: number) {
    if (!currentEnrollment.includes(id)) {
      currentEnrollment.push(id)
    }
  }
  return {
    addStudent,
    printStudents,
    enrollStudent,
    printEnrolledStudents,
  }

  // function printCurrentEnrollment() {
  //   printRecords(currentEnrollment)
  // }
  // function enrollPaidStudents() {
  //   currentEnrollment = paidStudentsToEnroll()
  //   printCurrentEnrollment()
  // }

  // function remindUnpaidStudents() {
  //   remindUnpaid(currentEnrollment)
  // }

  // function addStudent(id, name, paid) {
  //   studentRecords.push({ id, name, paid })
  // }

  // function getStudentFromId(studentId) {
  //   return studentRecords.find(matchId)

  //   function matchId(record) {
  //     return record.id == studentId
  //   }
  // }

  // function printRecords(recordIds) {
  //   let records = recordIds.map(getStudentFromId)

  //   records.sort(sortByNameAsc)

  //   records.forEach(printRecord)
  // }

  // function sortByNameAsc(record1, record2) {
  //   if (record1.name < record2.name) return -1
  //   else if (record1.name > record2.name) return 1
  //   else return 0
  // }

  // function printRecord(record) {
  //   console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
  // }

  // function paidStudentsToEnroll() {
  //   let recordsToEnroll = studentRecords.filter(needToEnroll)

  //   let idsToEnroll = recordsToEnroll.map(getStudentId)

  //   return [...currentEnrollment, ...idsToEnroll]
  // }

  // function needToEnroll(record) {
  //   return record.paid && !currentEnrollment.includes(record.id)
  // }

  // function getStudentId(record) {
  //   return record.id
  // }

  // function remindUnpaid(recordIds) {
  //   let unpaidIds = recordIds.filter(notYetPaid)

  //   printRecords(unpaidIds)
  // }

  // function notYetPaid(studentId) {
  //   let record = getStudentFromId(studentId)
  //   return !record.paid
  // }
}
