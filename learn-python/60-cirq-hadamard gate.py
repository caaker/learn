print("")
print("***************")
print("cirq")
print("***************")
print("")

import cirq

# place a single qbit named 'q' on a 1D line at index 0
qbit = cirq.LineQubit(0)

# creates a quantum circuit ( a series of quantum operations )
circuit = cirq.Circuit(

  # applies the Hadamard gate to the qbit
  # putting it into a superposition of |0> and |1>
  cirq.H(qbit),

  # measures qbit and and stores the result in a classical bit `q0`
  cirq.measure(qbit, key='q0')
)

# creates a classical simulator for quantum circuits so we can run the quantum circuit
sim = cirq.Simulator()

# executes the quantum circuit repetitively and stores the result
result = sim.run(circuit, repetitions=1024)

# 1 output is Counter({1: 537, 0: 487})
print(result.histogram(key='q0'))
