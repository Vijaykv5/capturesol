import React from "react";

export const lessonContent = [
  {
    title: "Introduction to Solana",
    xp: 50,
    maxXp: 100,
    theory: {
      story:
        "In a world where traditional finance struggles to keep up with the pace of technological advancement, a group of brilliant minds came together to create Solana, a blockchain that promised to revolutionize the crypto space...",
      content: (
        <>
          <p>
            Solana is a high-performance blockchain that aims to solve the
            blockchain trilemma: decentralization, security, and scalability. It
            was founded in 2017 by Anatoly Yakovenko, who previously worked at
            Qualcomm.
          </p>
          <p>Key features of Solana include:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Proof of History (PoH) - a novel timekeeping method for
              distributed systems
            </li>
            <li>
              Tower BFT - a PoH-optimized version of Practical Byzantine Fault
              Tolerance
            </li>
            <li>
              Gulf Stream - Solana's mempool-less transaction forwarding
              protocol
            </li>
            <li>Sealevel - Parallel smart contracts run-time</li>
          </ul>
          <p className="mt-4">
            Solana's native cryptocurrency is called SOL, which is used for
            transaction fees and staking.
          </p>
          <p className="mt-2">
            The Solana ecosystem has grown rapidly, with many decentralized
            applications (dApps) being built on the platform, including
            decentralized exchanges (DEXs), NFT marketplaces, and DeFi
            protocols.
          </p>
        </>
      ),
    },
    questionnaire: [
      {
        question: "What is Solana's native cryptocurrency called?",
        answer: "SOL",
      },
      {
        question: "Who founded Solana?",
        answer: "Anatoly Yakovenko",
      },
      {
        question: "What does PoH stand for in Solana's context?",
        answer: "Proof of History",
      },
    ],
  },
  {
    title: "Solana Program Model",
    xp: 100,
    maxXp: 200,
    theory: {
      story:
        "As our heroes delved deeper into the Solana ecosystem, they discovered a unique approach to smart contract development. The Solana Program Model opened up new possibilities, challenging their understanding of blockchain architecture...",
      content: (
        <>
          <p>
            Solana uses a unique program model that differs from other
            blockchain platforms. In Solana, smart contracts are called
            "programs".
          </p>
          <p>Key concepts of the Solana Program Model include:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Accounts - They store state and are owned by programs</li>
            <li>Instructions - They invoke programs and can modify accounts</li>
            <li>
              Transactions - They are composed of one or more instructions
            </li>
            <li>
              Programs - They process instructions and update account states
            </li>
          </ul>
          <p className="mt-4">
            Solana programs are stateless and can own accounts that store state.
            This separation of code and state allows for more efficient
            execution and upgradability.
          </p>
          <p className="mt-2">
            The Solana runtime uses the Berkeley Packet Filter (BPF) bytecode
            format for its programs, which allows for fast and secure execution.
          </p>
        </>
      ),
    },
    questionnaire: [
      {
        question: "What are smart contracts called in Solana?",
        answer: "Programs",
      },
      {
        question: "What bytecode format does Solana use for its programs?",
        answer: "BPF",
      },
      {
        question: "What stores state in Solana's program model?",
        answer: "Accounts",
      },
    ],
  },
];
