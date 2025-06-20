import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "GENERAL",
    description: "General discussion and introductions",
    threads: 1234,
    posts: 5678,
    lastPost: { user: "h4ck3r_42", time: "2024-01-15 14:30:22" },
  },
  {
    id: 2,
    name: "PROJECTS",
    description: "Share your code and collaborate",
    threads: 567,
    posts: 2341,
    lastPost: { user: "code_ninja", time: "2024-01-15 13:45:11" },
  },
  {
    id: 3,
    name: "OPEN_SOURCE",
    description: "Free software and open source projects",
    threads: 890,
    posts: 3456,
    lastPost: { user: "gnu_lover", time: "2024-01-15 12:20:33" },
  },
  {
    id: 4,
    name: "DOCUMENTATION",
    description: "Tutorials, guides and documentation",
    threads: 234,
    posts: 1789,
    lastPost: { user: "doc_master", time: "2024-01-15 11:15:44" },
  },
  {
    id: 5,
    name: "SECURITY",
    description: "Security research and ethical hacking",
    threads: 445,
    posts: 1923,
    lastPost: { user: "sec_expert", time: "2024-01-15 10:30:55" },
  },
  {
    id: 6,
    name: "HARDWARE",
    description: "Hardware hacking and embedded systems",
    threads: 123,
    posts: 678,
    lastPost: { user: "hw_hacker", time: "2024-01-15 09:45:12" },
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-4">
          {/* Welcome Message */}
          <div className="mb-6 p-4 border border-green-400/30 bg-green-400/5">
            <div className="ascii-art text-green-400 text-xs mb-2">
              {`┌─ WELCOME TO LOOPSOCIETY ─┐
│  for(;;) { hack(); }      │
└───────────────────────────┘`}
            </div>
            <p className="text-sm text-green-300">
              {">"} Welcome to LoopSociety, the underground forum for developers, hackers, and open source enthusiasts.
              <br />
              {">"} Share code, collaborate on projects, and push the boundaries of technology.
              <br />
              {">"} Remember: Knowledge is power. Share it responsibly.
            </p>
          </div>

          {/* Categories Table */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-2 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">┌─ FORUM CATEGORIES ─┐</h2>
            </div>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-2 p-2 bg-green-400/5 border-b border-green-400/30 text-xs font-bold text-green-300">
              <div className="col-span-4">CATEGORY</div>
              <div className="col-span-2 text-center">THREADS</div>
              <div className="col-span-2 text-center">POSTS</div>
              <div className="col-span-4">LAST POST</div>
            </div>

            {/* Categories */}
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="block hover:bg-green-400/10 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-3 border-b border-green-400/20 text-sm">
                  <div className="md:col-span-4">
                    <div className="text-green-400 font-bold">
                      [{String(index + 1).padStart(2, "0")}] {category.name}
                    </div>
                    <div className="text-green-300/70 text-xs mt-1">{category.description}</div>
                  </div>

                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden text-green-300">Threads: </span>
                    <span className="text-green-400">{category.threads.toLocaleString()}</span>
                  </div>

                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden text-green-300">Posts: </span>
                    <span className="text-green-400">{category.posts.toLocaleString()}</span>
                  </div>

                  <div className="md:col-span-4 text-xs">
                    <div className="text-green-300">
                      {">"} {category.lastPost.user}
                    </div>
                    <div className="text-green-400/70">{category.lastPost.time}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Online Users */}
          <div className="mt-6 border border-green-400/30">
            <div className="bg-green-400/10 p-2 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ ONLINE USERS [89] ─┐</h3>
            </div>
            <div className="p-3 text-xs">
              <div className="text-green-400 mb-2">{">"} Active hackers in the last 15 minutes:</div>
              <div className="text-green-300 space-x-2">
                <span className="text-green-400">[ADMIN]</span> root_access,
                <span className="text-green-400">[MOD]</span> cyber_guardian, h4ck3r_42, code_ninja, gnu_lover,
                sec_expert, hw_hacker, data_miner, script_kiddie, kernel_panic, buffer_overflow, stack_trace,
                git_master, vim_warrior, emacs_lord, terminal_god, bash_wizard, python_snake, rust_crab, go_gopher,
                js_ninja, css_wizard, html_hero, sql_master, nosql_rebel, docker_whale, k8s_captain, cloud_surfer,
                devops_guru, ci_cd_bot, test_driven, bug_hunter, feature_creep, tech_debt, legacy_code, refactor_king,
                clean_coder, solid_principles, design_pattern, algorithm_ace, data_structure, big_o_notation,
                time_complexity, space_complexity, optimization_freak, performance_tuner, memory_leak,
                garbage_collector, thread_safe, race_condition, deadlock_detective, concurrency_master,
                parallel_processing, distributed_system, microservice_monk, monolith_slayer, api_gateway, load_balancer,
                cache_master, database_admin, query_optimizer, index_wizard, transaction_guru, acid_compliance,
                eventual_consistency, cap_theorem, blockchain_believer, crypto_miner, smart_contract, web3_pioneer,
                nft_skeptic, defi_degen, dao_member, metaverse_explorer, ar_vr_dev, ml_engineer, ai_researcher,
                neural_network, deep_learning, computer_vision, nlp_expert, data_scientist, big_data_analyst,
                etl_pipeline, data_warehouse, business_intelligence, analytics_ninja, dashboard_designer,
                visualization_artist, ux_ui_hybrid, frontend_wizard, backend_beast, fullstack_hero, mobile_dev,
                native_purist, cross_platform, pwa_advocate, spa_specialist, ssr_supporter, jamstack_fan,
                serverless_sam, edge_computing, iot_tinkerer, embedded_expert, firmware_flasher, pcb_designer,
                3d_printer, maker_movement, diy_electronics, raspberry_pi, arduino_artist, fpga_programmer,
                verilog_veteran, vhdl_hero, asic_architect
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
