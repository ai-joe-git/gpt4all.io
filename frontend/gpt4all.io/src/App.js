import "./styles/globals.css";
import React, { useState, useEffect } from "react";
import Vertical from "./components/connectors/vertical";
import { ChevronDown } from "lucide-react";

import DownloadBar from "./components/download_bar";
import DownloadBar2 from "./components/download_bar2";
import InstallInstructions from "./components/install_instructions";
import EcosystemItem from "./components/ecosystem_item";
import CapabilityCard from "./components/capability_card";
import PerformanceTable, {
  PerformanceTableMobile,
} from "./components/performance_table";
import ModelsTable from "./components/models";

// TODO: media breakpoints

// Links to project in the GPT4All ecosystem. Lives here as const to keep things easy.
const ecosystem_links = [
  {
    icon: "/github-mark.svg",
    url: "https://github.com/nomic-ai/gpt4all",
    title: "Open AI-Pro Training",
    description: "Train your own Open AI-Pro models.",
  },
  {
    icon: "/github-mark.svg",
    url: "https://docs.gpt4all.io",
    title: "Open AI-Pro Documentation",
    description: "Integrate a locally running LLM into any codebase.",
  },
  {
    icon: "/github-mark.svg",
    url: "https://github.com/nomic-ai/gpt4all/tree/main/gpt4all-chat",
    title: "Open AI-Pro Chat",
    description: "A multi-platform chat interface for running local LLMs",
  },
  {
    icon: "/github-mark.svg",
    url: "https://github.com/nomic-ai/gpt4all/tree/main/gpt4all-bindings/python",
    title: "Open AI-Pro in Python",
    description: "Python Bindings to Open AI-Pro",
  },
  {
    icon: "/github-mark.svg",
    url: "https://github.com/nomic-ai/gpt4all-datalake",
    title: "Open AI-Pro Datalake",
    description:
      "An datalake for Open AI-Pro interaction data.",
  },
];

// Update installers here
const installers = [
  {
    osName: "Android",
    linkMain: "https://github.com/AI-Joe-git/gpt4all.io/raw/main/mlc-chat.apk",
    linkAlt:
      "https://github.com/AI-Joe-git/gpt4all.io/raw/main/mlc-chat.apk",
  },
  {
    osName: "Windows",
    linkMain: "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-win64-v2.5.4.exe",
    linkAlt:
      "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-win64-v2.5.4.exe",
  },
  {
    osName: "macOS",
    linkMain: "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-darwin-v2.5.4.dmg",
    linkAlt:
      "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-darwin-v2.5.4.dmg",
  },
  {
    osName: "Ubuntu",
    linkMain: "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-linux-v2.5.4.run",
    linkAlt:
      "https://github.com/nomic-ai/gpt4all/releases/download/v2.5.4/gpt4all-installer-linux-v2.5.4.run",
  },
];

const installers2 = [
  {
    osName: "Android",
    linkMain: "https://github.com/AI-Joe-git/gpt4all.io/raw/main/mlc-chat.apk",
    linkAlt:
      "https://github.com/AI-Joe-git/gpt4all.io/raw/main/mlc-chat.apk",
  },
];


function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="App font-sans w-screen h-screen flex flex-col overflow-x-hidden relative">
      <header className="z-20 fixed w-full h-14 p-6 flex flex-row gap-8 items-center bg-slate-50/50">
            <a href="https://openai-pro.pro/">
          <img
            alt="Nomic AI logo"
            src={process.env.PUBLIC_URL + "/gpt4all-128.webp"}
            className="w-12 h-12"
          />
        </a>
        <title>Open AI-Pro</title>
        <title>Open AI-Pro</title>
      </header>
      <main className="flex flex-col justify-center h-full items-center px-8 md:px-36 mt-[8rem] xl:mt-24">
        <div className="2md:mt-0 flex flex-col lg:flex-row justify-center lg:justify-between w-full">
          <div className="flex flex-col w-full lg:w-1/2 gap-4 text-center md:text-start">
          <h2 className="text-3xl md:text-4xl font-bold text-center 2md:text-start">
            Open AI-Pro.
            </h2>
            <h2 className="text-xl md:text-3xl font-bold text-center 2md:text-start">
            Introducing our Private AI Assistant:
            </h2>
            <p className="text-2xl xl:text-3xl leading-normal lg:pr-12 text-center 2md:text-start">
              Complete data security and privacy with our locally-run chatbot.{" "}
              <strong>No online risks or maintenance fees.</strong>
            </p>
            <p className="text-2xl xl:text-3xl leading-normal lg:pr-12 text-center 2md:text-start">
              Lifelong access for a one-time affordable fee.{" "}
            </p>
            <p className="text-2xl xl:text-3xl leading-normal lg:pr-12 text-center 2md:text-start">
              <strong> Take back control of your data today.</strong>
            </p>


          </div>

          <div className="w-full lg:w-1/2 xl:pl-24 mt-8 lg:mt-0">
            <div>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/landing.gif"}
                  className="rounded-md w-full mx-auto lg:mx-none"
                />
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Real-time inference latency on an M1 Mac
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-24 w-full items-center">
          <h4 className="font-semibold text-zinc-500/50 text-lg">
            Download Chat Client
          </h4>

          <div className="hidden md:flex flex-row justify-center gap-8 lg:gap-24 mt-4">
            {installers.map((obj, idx) => (
              <DownloadBar
                key={idx}
                osName={obj.osName}
                linkMain={obj.linkMain}
                linkAlt={obj.linkAlt}
              />
            ))}
          </div>
          <div className="flex md:hidden justify-center items-center">
          {installers2.map((obj, idx) => (
              <DownloadBar2
                key={idx}
                osName={obj.osName}
                linkMain={obj.linkMain}
                linkAlt={obj.linkAlt}
              />
            ))}
          </div>
        </div>

        {/* <div className='w-full items-center flex flex-col justify-center mb-24'>

            <Vertical/>
            <h2 className='text-4xl font-bold text-center mt-8'>
                    Open AI-Pro Capabilities
            </h2>
            <span className='text-lg text-slate-500 text-center mt-2 px-6 sm:px-0'>Explore what GPT4All can do. On your own hardware.</span>
        </div> */}
      </main>
      <div className="w-full items-center flex flex-col justify-center my-14">
        <Vertical />
        <h2 className="text-4xl font-bold text-center mt-8">
          Open AI-Pro Capabilities
        </h2>
        <span className="text-lg text-slate-500 text-center mt-2 px-6 sm:px-0">
          Explore what Open AI-Pro can do. On your own hardware.
        </span>
      </div>
      <div className="w-full px-8 md:px-36 mt-8 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CapabilityCard
            header="Answer questions about the world"
            description="Ask Open AI-Pro about anything."
            gif={process.env.PUBLIC_URL + "/roman_gpt4all.gif"}
            still={process.env.PUBLIC_URL + "/roman_gpt4all_still.webp"}
            alt="Open AI-Pro describing the collapse of the Roman Empire"
          />

          <CapabilityCard
            header="Personal writing assistant"
            description="Write emails, documents, creative stories, poems, songs and plays."
            gif={process.env.PUBLIC_URL + "/robot_poem_gpt4all.gif"}
            still={process.env.PUBLIC_URL + "/robot_poem_gpt4all_still.webp"}
            alt="Open AI-Pro writing a poem."
          />

          <CapabilityCard
            header="Understand documents"
            description="Provide your own text documents and receive summaries and answers about their contents."
            gif={process.env.PUBLIC_URL + "/baroque_gpt4all.gif"}
            still={process.env.PUBLIC_URL + "/baroque_gpt4all_still.webp"}
            alt="GIF of Open AI-Pro summarizing a paragraph from Wikipedia."
          />

          <CapabilityCard
            header="Write code"
            description="Get guidance on easy coding tasks. Code capabilities are under improvement."
            gif={process.env.PUBLIC_URL + "/web_request_gpt4all.gif"}
            still={process.env.PUBLIC_URL + "/web_request_gpt4all_still.webp"}
            alt="Open AI-Pro writing Python code."
          />
        </div>
      </div>
      <div className="w-full flex flex-col px-4 sm:px-8 md:px-36 mt-24">
        <h2 className="text-4xl font-bold text-center">
          Installation Instructions
        </h2>
        <div className="w-full mt-8">
          <InstallInstructions />
        </div>
      </div>

      <div className="hidden lg:block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14">
        <h2 className="text-4xl font-bold text-center mb-4">
          Performance Benchmarks
        </h2>
        <PerformanceTable />
      </div>

      {/*<div className='sm:hidden block w-full flex flex-col justify-center gap-8 px-4 md:px-36 mt-14'>*/}
      {/*    <h2 className='text-4xl font-bold text-center'>Performance Benchmarks</h2>*/}
      {/*    <PerformanceTableMobile/>*/}
      {/*</div>*/}


      <div className="w-full px-4 sm:px-8 md:px-36 flex flex-col justify-center items-center mt-14 gap-8">
        <h2 className="text-4xl font-bold text-center">How Open AI-Pro Works</h2>

        <div className="w-full lg:w-2/3 px-0 space-y-8 xl:px-32">
          <p className="leading-relaxed">
            Open AI-Pro is an ecosystem to train and deploy <b>powerful</b> and{" "}
            <b>customized</b> large language models that run <b>locally</b> on
            consumer grade CPUs.
          </p>
          <p className="leading-relaxed">
            The goal is simple - be the best instruction tuned assistant-style
            language model that any person or enterprise can freely use,
            distribute and build on.
          </p>

          <p className="leading-relaxed">
            A Open AI-Pro model is a 3GB - 8GB file that you can download and plug
            into the Open AI-Pro ecosystem software. <b>Open AI-Pro AI</b>{" "}
            supports and maintains this software ecosystem to enforce quality
            and security alongside spearheading the effort to allow any person
            or enterprise to easily train and deploy their own on-edge large
            language models.
          </p>
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 md:px-36 flex justify-center items-center mt-14">
        <ModelsTable />
      </div>



      <div className="w-full px-4 sm:px-8 md:px-36 flex flex-col justify-center items-center mt-14 gap-8">
        <h2 className="text-4xl font-bold text-center">
          Open AI-Pro Datalake
        </h2>
        <div className="w-full lg:w-2/3 px-0 space-y-8 xl:px-32">
          <p className="leading-relaxed">
            Data is one the most important ingredients to successfully building
            a powerful, general purpose large language model. The Open AI-Pro
            community has built the Open AI-Pro datalake as a staging
            ground for contributing instruction and assistant tuning data for
            future Open AI-Pro model trains. It allows anyone to contribute to the
            democratic process of training a large language model.
          </p>
          <p className="leading-relaxed">
            All data contributions to the Open AI-Pro Datalake will be
            in their raw and Atlas-curated form. 
            <b>
              <a
                className="underline"
                href="https://github.com/nomic-ai/gpt4all-datalake"
              >
                
              </a>
            </b>
              You can contribute by using the Open AI-Pro Chat client and
            'opting-in' to share your data on start-up. By default, the chat
            client will not let any conversation history leave your computer.
          </p>
        </div>

        <p>Explore a recent snapshot of the Open AI-Pro Datalake in Atlas below.</p>
        <iframe
          className="hidden lg:block"
          src="https://atlas.nomic.ai/map/gpt4all-datalake"
          width="100%"
          height="1000px"
        ></iframe>
        <span className="text-lg text-slate-400 block lg:hidden">
          Atlas Map must be viewed on a larger display
        </span>
      </div>
      <div className="h-48 mt-24 w-screen"></div>
      {/*<footer>footer</footer>*/}
    </div>
  );
}

export default App;
