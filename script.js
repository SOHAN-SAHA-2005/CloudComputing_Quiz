// 1. RAW DOCUMENT TEXT (All 130 Questions Embedded)
const rawData = `
Assignment-Week 0
QUESTION 1:
Which of the following port numbers fall in the ephemeral/private (dynamic) range?
a) 80
b) 1023
c) 49259
d) 55000
Correct Answer: (c), (d)
Detailed Solution: Ephemeral (dynamic/private) ports are in the range 49152–65535. Port 49152  and 55000 lie in that range.
Port 80 is well-known (HTTP) and 1023 is still in the well-known system  range (0–1023).

QUESTION 2:
Which of the following devices operates at the Network Layer (Layer 3)?
a) Hub
b) Gateway
c) Repeater
d) Switch
Correct Answer: (b)
Detailed Solution: A gateway operates at the Network Layer and can connect networks with  different protocols.
A hub and repeater operate at the Physical Layer (Layer 1), while a switch  operates at the Data Link Layer (Layer 2).

QUESTION 3:
In classful addressing, the IP address 172.16.5.4 belongs to which class??
a) Class A
b) Class B
c) Class C
d) Class D
Correct Answer: (b)
Detailed Solution: Classful ranges: A = 1.0.0.0–126.255.255.255, B = 128.0.0.0–191.255.255.255,  C = 192.0.0.0–223.255.255.255.
IP 172.16.5.4 is within 128–191 hence Class B

QUESTION 4:
In the OSI model, which layer is primarily responsible for data representation, encryption, and   translation between application formats?
a) Session Layer
b) Presentation Layer
c) Transport Layer
d) Application Layer
Correct Answer: (b)
Detailed Solution: The Presentation layer (Layer 6) handles syntax translation, data representation  (e.g., character encoding), and optional encryption/compression i.e., preparing data for the  Application layer.
Session manages dialog control; Transport handles end-to-end delivery.

QUESTION 5:
Which of the following application-layer protocols uses TCP as its transport layer protocol for reliable   file transfer?
a) SNMP
b) TFTP
c) FTP
d) DHCP
Correct Answer: (c) FTP
Detailed Solution: FTP (File Transfer Protocol) uses TCP to ensure reliable and error-free file  transmission.
SNMP, TFTP, and DHCP primarily use UDP, which does not guarantee delivery.

QUESTION 6:
Match the following protocols with their respective TCP/IP layers:
1 ICMP  |  A. Data Link Layer
2 TELNET  |   B. Application Layer
3 Ethernet | C. Transport Layer
4 DHCP | D. Network Layer
a) 1-D, 2-B, 3-A, 4-B
b) 1-C, 2-A, 3-B, 4-D
c) 1-B, 2-C, 3-D, 4-A
d) 1-D, 2-C, 3-A, 4-D
Correct Answer: (a)
Detailed Solution: ICMP (Internet Control Message Protocol) is a network layer protocol (Layer  3) - Answer: D .TELNET is an application layer protocol (Layer 7) - Answer: B Ethernet is a data  link layer protocol (Layer 2) - Answer: A DHCP (Dynamic Host Configuration Protocol) is an  application layer protocol (Layer 7) - Answer: B
Therefore, the correct matching is 1-D, 2-B, 3-A, 4-B.

QUESTION 7:
In the OSI model, the layer responsible for logical topology and determining the best path for data  transmission is:
a) Data Link Layer
b) Physical Layer
c) Transport Layer
d) Network Layer
Correct Answer: (d)
Detailed Solution: The Network Layer (Layer 3) is responsible for logical addressing (IP  addresses), routing, and determining the best path for data transmission between networks using  routing algorithms.
The Data Link Layer (Layer 2) handles physical addressing and operates on the  local network segment.
The Physical Layer (Layer 1) deals with physical transmission media. The  Transport Layer (Layer 4) manages end-to-end communication reliability.

QUESTION 8:
The transport layer protocols commonly used for the following services — (real-time multimedia,  email, file transfer, DNS) respectively are:
a) TCP, UDP, UDP, TCP
b) UDP, TCP, TCP, UDP
c) TCP, TCP, UDP, TCP
d) UDP, UDP, TCP, UDP
Correct Answer: (b) UDP, TCP, TCP, UDP
Detailed Solution: Real-time multimedia typically uses UDP (lower latency, tolerance for loss).  Email (SMTP/POP/IMAP) uses TCP.
File transfer (FTP/SFTP) uses TCP. DNS typically uses UDP  for queries (TCP is used for zone transfers and when responses exceed UDP limits).
So the order is  UDP, TCP, TCP, UDP.

QUESTION 9: In a direct mapped cache Tag is 4bits, Index is 12 bits, block size is 1 byte.
What is the size of  Main Memory and Cache Memory?
a) 64Kb and 4Kb
b) 128Kb and 16Kb
c) 64Kb and 8Kb
d) 128Kb and 6Kb
Corrected Answer : (a)
Detailed Solution :Total Address Bits = Tag + Index + Block Offset
Block Offset = log₂(Block Size) = log₂(1) = 0 bits
Total Address Bits = 4 + 12 + 0 = 16 bits
Number of Cache Lines = 2^(Index bits)
= 2^12
= 4,096 cache lines
Cache Size = Number of Cache Lines × Block Size
= 4,096 × 1 Byte
= 4,096 Bytes
= 4 KB
Main Memory Size = 2^(Total Address Bits)
= 2^16
= 65,536 Bytes
= 64 KB

QUESTION 10:
In a 8-way Set Associative Mapping, Cache Memory is 64Kb, Main Memory Address is 32bit.
The  address is sub divided into Tag, Index and Block Offset.
The number of bits in the Tag is :
a)20
b)19
c)18
d)22
Correct Answer: (b) 19
Detailed Solution : Block Size = 64 Bytes = 2^6 Bytes
Block Offset = log₂(64) = 6 bits .Cache Size = Number of Sets × Associativity × Block Size 64 KB = Number of Sets × 8 × 64 Bytes.
Number of Sets = 64 KB / (8 × 64 Bytes) = 65,536 / 512 = 128 sets = 2^7 sets .
Index Bits = log₂(128) = 7 bits .Total Address Bits = TAG + INDEX +  BLOCK OFFSET.
Therefore, TAG = 32 - 7 - 6 = 19 bits

Assignment-Week 7

QUESTION 80:
A smart healthcare system uses wearable sensors to continuously monitor patients’ ECG signals and detect abnormalities in real time.
Alerts must be raised within a few hundred milliseconds.  Which combination is most appropriate to meet these latency requirements?
Batch analytics in a distant cloud region + periodic manual report downloads
Pure cloud processing over a high-latency satellite link
C) Fog/Edge nodes performing local pre-processing + low-latency wireless access network (e.g.,  5G)
Storing all data offline on the device and uploading it once per day
Correct Answer: C
Detailed Solution: For real-time health monitoring, the system must process data close to the  patient (fog/edge) and use low-latency communication (e.g., 5G) to meet strict timing constraints.
Pure cloud with high latency or delayed batch uploads cannot provide immediate alerts.

Assignment-Week 1

QUESTION 11:
Which one of the following statements least aligns with the NIST defined essential characteristics  of cloud computing?
A. On-demand self-service
B. Rapid elasticity
C. Guaranteed zero downtime for all services
D. Measured service
Correct Answer: C. Guaranteed zero downtime for all services.
Detailed Solution: NIST lists on-demand self-service, resource pooling, rapid elasticity, measured  service, broad network access;
it does not include any absolute downtime guarantee.

QUESTION 12: A user accesses Google Docs through a web browser and collaborates in real-time with others.
The  user never manages servers, operating systems, or runtime environments.
However, Google Docs  internally relies on Google Cloud’s infrastructure and platforms.
From the user’s perspective,  Google Docs is best classified as:
A. PaaS
B. IaaS
C. SaaS
D. FaaS
Correct Answer: C
Detailed Solution: Google Docs is a provider’s application that runs on Google Cloud.
The  application can be accessed from various client terminals through a client interface, say a web  browser.
So, It is a Software as a Service (SaaS) model.

QUESTION 13:
Which of the following is a public cloud platform in typical commercial cloud computing?
A. Windows Server with Hyper-V installed on an organization’s on-premise hardware B. Google Cloud Platform services accessible over the public Internet
C. A private OpenStack cloud running inside a company’s own data center D. VMware vSphere used for internal virtualization
Correct Answer: B
Detailed Solution: A public cloud platform is operated by a third-party provider and made  available to users over the public Internet.

QUESTION 14:
Virtualization technology allows multiple virtual machines (VMs) to run on a single physical  system or on a cluster of physical systems.
Which of the following statements is the MOST  accurate?
Each VM always shares the same operating system kernel with the host OS.
B. Multiple VMs can run different operating systems on the same physical machine  simultaneously.
C. Virtualization is only possible in cloud computing environments.
D. Virtualization prevents resource overcommitment on the host system.
Correct Answer: B
Detailed Solution: Modern hypervisors (e.g., VMware, KVM) allow multiple VMs with different  OSs to share the same physical hardware.
Option A describes containers more than full VMs.  Virtualization pre-dates cloud (so C is false), and resource overcommitment (CPU/memory  overcommit) is actually a feature often used, not prevented (D is false).

QUESTION 15:
A distributed system is typically preferred when the task is:
(i) Data-intensive (large volumes of data distributed across locations)
(ii) Compute-intensive (requires heavy parallel processing)
(iii) Latency-sensitive but confined to a single machine
Choose the BEST option:
A. Only (i)
B. Only (ii)
C. (i) and (ii)
D. (i), (ii), and (iii)
Correct Answer: C
Detailed Solution: Distributed systems shine when tasks are both data-intensive and compute intensive and can benefit from parallelism and data locality.
Latency-sensitive tasks confined to a  single machine (iii) may actually suffer from distribution overhead.

QUESTION 16:
The combination of Service-Oriented Architecture (SOA) and Cloud Computing led to a paradigm  where almost any IT capability can be delivered as a network-accessible service.
This is often  referred to as:
A. FTP
B. SNTP
C. XaaS
D. FaaS
Correct Answer: C
Detailed Solution: XaaS = “Anything/Everything as a Service”, an umbrella term for delivering  diverse IT services via the cloud.
FaaS (Functions as a Service) is only one specific service model,  not the broad paradigm.

QUESTION 17:
PaaS (Platform as a Service) brings several benefits to application developers. Which of the  following statements about PaaS are CORRECT?
It abstracts away infrastructure management, allowing focus on application logic.
It can provide integrated services such as databases, web services, and messaging.
(iii) It always gives full root-level access to underlying virtual machines.
(iv) It supports rapid creation and deployment of software applications.
A. (i), (ii), and (iv) only
B. (ii) and (iii) only
C. (i) and (iii) only
D. (i), (ii), (iii), and (iv)
Correct Answer: A
Detailed Solution: PaaS hides infrastructure details and offers integrated services, enabling rapid  application development and deployment.
Full root-level access to the underlying VMs (iii) is not  typical in PaaS; that’s closer to IaaS.

QUESTION 18:
In the context of virtualization, which statement best distinguishes a Type-1 (bare-metal)  hypervisor from a Type-2 hypervisor?
A. Type-1 runs on top of an OS; Type-2 runs directly on hardware.
B. Type-1 typically gives lower virtualization overhead because it runs directly on hardware.
C. Type-2 can run multiple OSs; Type-1 cannot.
D. Type-1 is only used for desktop virtualization.
Correct Answer: B.
Detailed Solution: Type-1 typically gives lower virtualization overhead because it runs directly on  hardware.
Type-1 runs on bare metal, Type-2 runs on top of a host OS.

QUESTION 19:
Which of the following is a valid example of Platform as a Service (PaaS)?
A. A server image you configure and manage yourself on a rented VM
B. A managed relational database instance with automatic backups and scaling
C. A virtual machine where you install your own operating system
D. A bare-metal server managed entirely by your organization
Correct Answer: B
Detailed Solution: Managed relational database with automatic backups and scaling is PaaS,  because the provider handles infrastructure, runtime, and maintenance, letting developers focus on  application logic.

QUESTION 20:
A __________ is a distributed computer system that consists of a collection of interconnected  stand-alone computers working together as an integrated computing resource, typically located in  close proximity and managed as a single system.
A. Grid
B. Cluster
C. Cloud
D. Node
Correct Answer: B
Detailed Solution:A cluster is a set of tightly-coupled, interconnected stand-alone computers that  work together as if they were a single system.
Grids tend to be more loosely coupled and  geographically distributed; nodes are individual machines; “cloud” is a broader service-delivery  model.

Assignment-Week 2

QUESTION 30:
Service-Oriented Architecture (SOA) models relationships primarily among:
A. Two entities (a service provider and a requestor) only
B. Two entities (a service provider and a broker) only
C. Three entities (a service provider, a service requestor, and a broker/registry)
D. Three entities (a service provider, a service requestor, and a hypervisor)
Correct Option: C
Detailed Solution: In SOA, the architecture primarily involves three entities: the service provider,  which implements and publishes the service;
the service requestor, which consumes the service;  and the service broker (registry/mediator), which enables discovery and binding of services.
Hypervisors and virtualization components are unrelated to the logical SOA entity model.

Assignment-Week 2
QUESTION 21:
Para-virtualization is best described as:
Running an unmodified guest OS on top of a hypervisor with full CPU trapping.
Modifying the guest OS to use hypervisor-aware interfaces for certain privileged operations.
C. Emulating hardware in software so guests don’t need any changes.
D. Running containers that share the host kernel.
Correct Option: B
Detailed Answer: Para-virtualization requires the guest OS to be modified to call hypervisor friendly interfaces for privileged operations (improves performance but needs OS changes).

QUESTION 22:
Which statement about a community cloud is MOST accurate?
A. Owned and operated by a single organization for its exclusive use.
B. Shared infrastructure among several organizations with similar compliance/regulatory needs.
C. A public cloud account with extra IAM roles.
D. Always the most cost-effective option for small startups.
Correct Option: B
Detailed Answer: Community cloud shares infrastructure among organizations with common  concerns (e.g., regulatory or domain-specific).
(A=private, C incorrect, D not generally true.)

QUESTION 23:
When an organization considers using an outsourced private cloud (i.e., a private cloud  hosted/operated by a third party), which of the following should be explicitly considered?
(i) Network dependency and SLAs
(ii) Risks from multi-tenancy / co-residency
(iii) Legal/regulatory/compliance implications of where data is hosted
A. Only (i)
B. (i) and (ii) only
C. (i) and (iii) only
D. (i), (ii) and (iii)
Correct Option: D
Detailed Answer: Outsourcing raises network/SLA concerns, multi-tenancy risks (even in hosted  private clouds), and legal/compliance issues depending on data location.

QUESTION 24:
When processing very large XML files in a memory-constrained environment, and where the  application needs explicit control over the parsing flow, which XML parser API is MOST  appropriate?
A. DOM (loads the entire XML document into memory as a tree structure)
B. SAX (push-based, event-driven parsing with minimal memory usage but limited control)
C. StAX (pull-based, event-driven parsing offering low memory usage with explicit control)
D. All are equally suitable depending on developer preference
Correct Option: C
Detailed Answer: StAX is a pull-based, event-driven XML parser that allows applications to  control when and how XML events are processed.
It uses significantly less memory than DOM and  provides more flexible control than SAX, making it the most appropriate choice for parsing very  large XML files in memory-constrained environments.

QUESTION 25:
A hypervisor with hardware-assisted virtualization shows 40% CPU usage while VMs report only  15% utilization. What explains the 25% gap?
The hypervisor isn't using hardware extensions; it's relying on binary translation.
B. Context switching,memory management,and I/O emulation overhead—normal in virtualized environments.
C. Unmodified OS cannot fully utilize hardware virtualization.
D. This indicates efficient resource overcommitment.
Correct Option: B
Detailed Answer: Hardware-assisted virtualization reduces but doesn't eliminate hypervisor  overhead.
VM context switching, shadow page tables/EPT, and device emulation consume CPU  cycles not directly visible to guest OS metrics.
This is expected behavior.

QUESTION 26:
Which statement clarifies "Hypervisor," "Virtual Machine Monitor," and "Cluster Manager"?
A. All four terms are synonymous.
B. Hypervisor and Virtual Machine Monitor are synonymous; Virtual Machine Manager adds orchestration; Cluster Manager manages physical machines.
C. Hypervisor = Type 1 only; Virtual Machine Monitor = Type 2 only.
D. They refer to different layers in a multi-tier virtualization stack.
Correct Option: B
Detailed Answer: Hypervisor and VMM are interchangeable core terms. Virtual Machine Manager implies additional provisioning/orchestration beyond basic monitoring.
Cluster Manager manages  multiple physical machines, not individual VMs. Both Type 1 and Type 2 are called hypervisors.

QUESTION 27:
Speed and flexibility are disadvantages of para-virtualization.
A. True
B. False
Correct Option: A
Detailed Answer: In para-virtualization, the guest operating system must be modified to interact  with the hypervisor using hypercalls.
While this can improve performance in some cases, it  reduces flexibility because only modified or supported operating systems can be used.
Additionally, performance gains depend on OS support, making speed less universally optimal  compared to hardware-assisted virtualization.

QUESTION 28:
Which mechanism was specifically designed as a registry/discovery approach for web services?
A. SMS
B. HTTP (as a generic transfer protocol)
C. SMTP
D. UDDI (Universal Description, Discovery, and Integration)
Correct Option: D
Detailed Answer: UDDI is the registry model/protocol designed for discovering web services;  HTTP/SMTP are transport protocols (UDDI typically uses HTTP).

QUESTION 29:
Which of the following problems are effectively addressed by traditional web services, and which  are NOT?
(i) Passing through firewalls using standard HTTP/HTTPS
(ii) Enabling interoperability across different programming languages and operating systems                              (iii) Ultra-low-latency, real-time inter-service communication
(iv) Service discovery through registries like UDDI
A. Only (i) and (ii) are addressed
B. (i), (ii), and (iv) are addressed; (iii) is NOT addressed
C. Only (ii) is addressed
D. All are addressed
Correct Option: B
Detailed Answer: Traditional web services address firewall transparency by using HTTP/HTTPS,  ensure platform and language interoperability via XML, SOAP, and WSDL, and support service  discovery through registries like UDDI.
However, they do not provide ultra-low-latency, real-time  communication, as XML parsing and SOAP overhead introduce delays, making modern  alternatives like gRPC better suited for real-time scenarios.

Assignment-Week 3

QUESTION 31:
Which of the following is least likely to be specified in an operational cloud Service Level  Agreement(SLA)?
A. Recovery Time Objective (RTO)
B. Exact encryption algorithm and key storage procedures
C. Mean Time To Repair (MTTR) for incidents
D. Penalty / credit calculation for downtime
Answer: B
Explanation: SLAs describe service-level commitments (RTO, MTTR, penalties); low-level  implementation/security procedures (exact algorithms/key storage) belong in security/operational  documents, not the SLA.

QUESTION 32:
Which level is typically included in a multilevel cloud Service Level Agreement (SLA)?
A. Corporate/provider-wide obligations
B. Individual developer employment contracts
C. Unrelated third-party agreements
D. Hardware vendor warranties
Answer: C
Explanation: A true multilevel SLA can include corporate/provider-wide obligations, which define  baseline commitments applicable to all customers.
Other valid SLA levels include customer specific adaptations and service-specific operational metrics, but individual employment contracts  or unrelated third-party agreements are not part of an SLA.

QUESTION 33:
An enterprise signs a three-tier multilevel SLA with a cloud provider.
However, the corporate-level  SLA guarantees 95% uptime, the customer-level SLA specifies 98% uptime, and the service-level  SLA guarantees 99.9% uptime.
In case of a service disruption, which level of SLA is the provider  LEGALLY BOUND to honor?
A. Corporate-level SLA, as it's the broadest agreement
B. Customer-level SLA, as it's the middle ground
C. Service-level SLA, as it's the most specific agreement
D. The provider can choose the lowest applicable SLA
Correct Answer: C
Explanation : Multilevel SLAs are structured hierarchically. The service-level SLA is the most  granular and specific to the actual service delivery and is legally binding.
If there's a conflict, the  highest level of commitment (service-level SLA at 99.9%) applies.
Corporate and customer-level  SLAs provide broader guarantees, but disputes are typically resolved at the service-level SLA  because that's where accountability directly lies with the provider's infrastructure.

QUESTION 34:
Which combination of metrics is most commonly included in production cloud SLAs to measure  availability and responsiveness?
A. Uptime percentage and mean time to respond (MTTR)
B. Developer salary and uptime percentage
C. IP address range and timezone of servers
D. Source-code commit frequency and bug count
Answer: A
Explanation: Uptime (availability) and response/recovery metrics measure SLA compliance. The  others are irrelevant or implementation details.

QUESTION 35:
A cloud service is guaranteed to handle 10,000 requests/hour with 99.5% success.
How many failed  requests per hour are acceptable under SLA?
A. 5
B. 10
C. 50
D. 500
Correct Answer: C
Explanation: Success rate = 99.5%, so failure rate = 0.5%
0.5% of 10,000 = ( 0 . 5 / 100 ) ×10000=50
So,50 failed requests/hour

QUESTION 36:
Which feature most clearly distinguishes parallel (analytic) databases from a single-node traditional  RDBMS in cloud analytics?
A. Support for SQL queries
B. Multi-node parallel query execution with data partitioning (shared-nothing or distributed  execution)
C. Transaction rollback (ACID) support
D. Use of normalized schemas only
Answer: B
Explanation: Parallel analytic DBs execute queries across multiple nodes with data partitioning to  scale analytics;
SQL and transactions exist in both, normalization is a design choice.

QUESTION 37:
You are designing a real-time analytics pipeline for a streaming IoT sensor network. The system  must:
● Handle 1 million events per second       ● Maintain sub-second latency   ● Support complex windowed aggregations (sliding windows of 5 minutes)    ● Which architectural choice is LEAST suitable?
A. Apache Kafka with Apache Flink for stream processing
B. Google Cloud Dataflow with shuffling disabled for specific operations
C. AWS S3 with batch processing using Apache Spark every 5 minutes
D. Azure Event Hubs with Structured Streaming
Correct Answer: C
Explanation:AWS S3 with batch processing (every 5 minutes) is unsuitable for sub-second latency  requirements.
Batch processing introduces inherent latency because data must be collected, written  to S3, and then processed in batch intervals.
This violates the sub-second latency SLA.

QUESTION 38:
You must design a scalable pipeline to process many large video files in parallel (storage +  compute).
Which storage choice is most suitable?
A. Managed relational DB (RDS/Aurora)
B. Object storage with Hadoop/Spark connector (e.g., S3/GCS + connector)
C. Single-node block volume attached to a VM
D. A small in-memory cache only
Answer: B
Explanation: Object storage (S3/GCS) with Hadoop/Spark connectors is designed for large binary  blobs and parallel processing;
RDBMS and single block volumes are unsuitable for scale.

QUESTION 39:
A MapReduce job is designed to count word frequencies in 2 TB of text files.
The mapper output is  1.5 TB (including overhead), and after the shuffle and sort phase, the data is 1.3 TB.
During the  reduce phase, a node runs out of disk space during the merge operation.
Which of the following is  the most likely cause and solution?
A. The mapper logic is inefficient; rewrite the mapper function
B. The combiner phase didn't run; ensure combiner is explicitly configured to compress intermediate data locally
C. The shuffle and sort didn't deduplicate keys; increase the number of reducers
D. The network bandwidth is saturated; add more nodes to the cluster
Correct Answer: B
Explanation:The combiner is a key MapReduce optimization that runs locally on each mapper  node after the map phase, pre-aggregating intermediate key-value pairs to reduce their volume  before shuffling.
In a word count job, for example, it can sum occurrences of each word on the  mapper node, potentially shrinking 1.5 TB of mapper output to 400–500 GB.
Without a combiner,  all intermediate data is sent to the reducers, which can overwhelm disk space during the merge phase.
By explicitly configuring a combiner, the amount of data transferred across the network and  merged by reducers is greatly reduced, preventing disk exhaustion and improving overall job efficiency.

QUESTION 40:
In an OpenStack deployment, if a compute node can support up to 900 virtual CPUs (vCPUs), and  the overcommit ratio for CPU is set to 4.5:1, what is the total number of vCPUs that can be  allocated?
4100
4150
4050
D. 4200
Correct Answer: C
Explanation: OpenStack allows overcommitment of compute resources. Total Allocatable vCPUs = Physical vCPUs × Overcommit Ratio  →900 × 4.5 =4050 vCPUs

Assignment-Week 4

QUESTION 50:
Instances inside a tenant network can communicate with each other but cannot obtain IP addresses  automatically.
What is the most likely cause?
A) Neutron L3 agent failure
B) Neutron DHCP agent failure
C) Nova conductor failure
D) Glance metadata corruption
Correct Answer: B
Detailed Solution: DHCP agent provides IP allocation to instances. Without it → no auto IP.

Assignment-Week 4
QUESTION 41:
In Azure SQL Database, which of the following statements about compute tiers is/are CORRECT?
a) Business Critical tier uses remote premium storage for cost optimization
b) General Purpose tier can replicate synchronously across regions without additional geo-replication configuration
c) Hyperscale tier allows automatic scaling of storage beyond 100TB without manual intervention
d) All the above
Correct Answer: C
Detailed Solution:Option a is FALSE: Business Critical tier uses LOCAL SSD storage, not remote storage.
Remote storage is used in General Purpose and Hyperscale tiers. This is a common misconception.
Option b  is FALSE: General Purpose tier does NOT synchronously replicate across regions by default. It uses  asynchronous replication.
Customers must explicitly enable geo-replication or use additional features.  Option c is TRUE: Hyperscale tier's primary strength is automatic, elastic scaling of storage.
It can grow  beyond 100TB without manual intervention or downtime, making it ideal for large databases with  unpredictable growth.

QUESTION 42:
An Azure VM supports attaching additional data disks. What ultimately limits the maximum number of  attachable disks?
a) Azure subscription type
b) Operating system
c) VM size and SKU
d) Region availability
Correct Answer: C
Detailed Solution: Disk limits are strictly enforced by VM size (SKU). OS and region do not affect disk  count limits.

QUESTION 43:
A Linux VM requires passwordless authentication. What is the MOST SECURE approach beyond SSH  keys?
SSH public key authentication with file permissions (600)
Azure AD SSH login through Azure Bastion or VM extension
Service Principal with client secret
Certificate-based SSH authentication
Correct Answer: B
Detailed Solution: Azure AD SSH eliminates the need to manage SSH keys on local machines.
Bastion acts as an intermediary, removing internet-facing SSH ports entirely.
The trick: SSH keys  are good, but Azure provides better security options.

QUESTION 44:
Standard (S1) App Service plan supports 10 deployment slots. What additional capability does  Premium (P2v3) provide beyond more slots (20)?
Faster swap operations
Traffic warm-up before swap (auto-swap with warm-up)
Slots no longer consume CPU/memory quota
Independent scaling per slot
Correct Answer: B
Detailed Solution:  Premium adds "traffic warm-up" — staging slot is fully loaded  before swap, reducing request failures.
Swap speed is the same. Slots always consume quota. The trick: more slots ≠ better slot functionality..

QUESTION 45:
You want an Azure App Service to securely access secrets without exposing credentials even in environment  variables.
What should you use?
a) App Settings
b) Service Principal
c) Managed Identity + Key Vault
d) Azure Storage Access Keys
Correct Answer: C
Detailed Solution : Key Vault alone is not enough. Managed Identity eliminates secret handling entirely.

QUESTION 46:
An application requires strong consistency, multi-row transactions, and sub-second global latency.  Which GCP database best fits?
Cloud Firestore (multi-region)
Cloud Spanner
Cloud Bigtable
BigQuery
Correct Answer: B
Detailed Solution : Cloud Spanner = globally distributed, strongly consistent, ACID transactions,  optimized for OLTP. Firestore = eventual consistency, document-based.
Bigtable = wide-column for  analytics. The trick: Firestore is global but not strongly consistent;
Spanner is designed for this exact use  case.

QUESTION 47:
In OpenStack, which service is responsible for deciding on which compute host a VM will run?
a) Neutron
b) Nova Scheduler
c) Nova Compute
d) Keystone
Correct Answer: B
Detailed Solution:Nova Compute runs the VM; Scheduler decides placement.

QUESTION 48:
Which GCP compute option is best suited for event-driven container execution without cluster management?
a) Compute Engine
b) GKE Autopilot
c) App Engine Standard
d) Cloud Run
Correct Answer: D
Detailed Solution: Cloud Run is serverless, container-native, and fully abstracts Kubernetes and  infrastructure.

QUESTION 49:
Your application needs to store petabytes of time-series IoT sensor data with very high write throughput, Millisecond read latency and No complex joins required then what is the best storage choice?
A) BigQuery
B) Cloud SQL
C) Bigtable
D) Firestore
Correct Answer: C
Detailed Solution: Bigtable is built for massive-scale, low-latency key-value/time-series workloads.  BigQuery is analytics, not low-latency serving.

Assignment-Week 5
QUESTION 51:
A cloud provider guarantees 99% availability. An application is scheduled to run Y hours per day for  20 days.
The observed downtime is 4 hours, and the SLA is violated.What is the maximum possible value of Y?
A. Y < 20
B. Y ≥ 20.2
C. Y = 24
D. Insufficient data
Correct Answer: A
Detailed Solution: Scheduled time = 20Y
Availability = (1 − 4 / 20Y) × 100
Since SLA is violated:
(1 − 4 / 20Y) < 0.99
4 / 20Y > 0.01
20Y < 400
Y < 20

QUESTION 52:
Which statement is always true in a multi-core cloud server?
A. Power consumption decreases as cores increase
B. Power consumption increases strictly linearly with cores
C. Activating more cores increases instantaneous power draw
D. Energy per task always increases with more cores
Correct Answer:C
Detailed Solution: More active cores mean higher instant power, but linearity and energy efficiency  per task vary with workload.

QUESTION 53:
An enterprise transitioning from pure on-premise infrastructure to a hybrid cloud model will  experience the most significant change in which economic aspect?
A. Operating expenditure increases relative to capital expenditure
B. Total cost of ownership (TCO) always decreases
C. Fixed costs does not decrease while variable costs increase
D. Annual revenue decreases due to infrastructure overhead
Correct Answer: A
Detailed Solution: In a hybrid cloud model, organizations reduce upfront capital expenditure  (CapEx) for hardware procurement but shift some costs to operational expenditure (OpEx) for cloud  service subscriptions.
The net economic impact depends on workload distribution, but the shift in the  ratio of OpEx to CapEx is the most dramatic and consistent change across hybrid deployments.
Option B is incorrect because TCO may not always decrease—it depends on pricing and utilization.
Option D is irrelevant to infrastructure decisions.

QUESTION 54:
Which cloud characteristic most directly improves cost efficiency for unpredictable workloads?
High availability
Elastic scalability
Geographic redundancy
Dedicated hardware
Correct Answer: B
Detailed Solution: Elasticity allows scaling resources up/down based on demand, preventing over provisioning and idle hardware costs.

QUESTION 55:
Which technology allows multiple operating systems to run on the same physical server?
Containerization
Virtualization
Load balancing
D. RAID
Correct Answer: B
Detailed Solution: Virtualization uses a hypervisor to run multiple OS instances on shared  hardware.

QUESTION 56:
Which factor MOST improves MapReduce performance in the cloud?
Increasing reducer count
Increasing replication factor
Scheduling mappers on nodes storing the data
Using larger block size only
Correct Answer: C
Detailed Solution: Data locality minimizes network transfer during map phase.

QUESTION 57:
Increasing HDFS block size generally results in:
More parallelism
Fewer mappers & reduced scheduling overhead
More shuffle traffic
Reduced fault tolerance
Correct Answer: B
Solution: Larger HDFS block sizes produce fewer input splits, which leads to fewer map tasks and  reduced scheduling overhead.

QUESTION 58:
In a cloud data center, an organization must choose between containerization and full virtualization  for a high-density workload.
Which statement best reflects the trade-off?
Containers provide stronger isolation than VMs because they use separate kernels
VMs have lower overhead because they share the host OS kernel
Containers achieve higher density but weaker isolation compared to VMs
Both have identical resource overhead
Correct Answer: C
Detailed Solution: Containers share the host operating system kernel, which reduces overhead and  enables higher workload density.
In contrast, virtual machines emulate hardware through a  hypervisor, providing stronger isolation between workloads.

QUESTION 59:
A cloud provider runs 8 physical servers hosting 32 VMs with an average CPU utilization of 50%.
After energy-aware consolidation, the VMs are migrated to 5 servers, increasing average CPU  utilization to 75%.
Which consequence is most likely?
Total power consumption decreased; SLA violation risk increased
Total power consumption increased; SLA improved
Total power consumption decreased; SLA unaffected
Insufficient data to determine impact
Correct Answer: A
Detailed Solution:
Consolidating VMs onto fewer physical servers reduces the number of active machines, which lowers  idle power consumption and decreases total energy usage.
However, the resulting higher CPU  utilization (e.g., from 50% to 75%) reduces available headroom for handling workload spikes,  increasing the risk of SLA violations or performance degradation during peak demand.
This  illustrates the key principle of energy-aware scheduling: it optimizes for power efficiency by trading  off some performance margin, a common strategy in cloud data centers to reduce operational costs.

QUESTION 60:
Which resource management technique helps avoid hotspots in a cloud cluster?
Energy-aware scheduling
VM migration / load balancing
Increasing replication factor
Using larger HDFS blocks
Correct Answer: B
Detailed Solution: Live VM migration or load balancing distributes workloads across servers to  prevent any host from becoming a performance bottleneck.

Assignment-Week 6

QUESTION 61:
An attacker captures a legitimate authentication token from a user session and replays that token later  to perform actions as the user.
This kind of attack primarily compromises which security property?
Confidentiality
Integrity
Availability
Authenticity
Correct Answer: D
Detailed Solution: Replaying a captured token allows the attacker to impersonate the legitimate user,  this undermines authenticity (the assurance that an entity is who it claims to be).
Although  confidentiality was breached when the token was captured, the primary effect of the replay is  impersonation/authenticity failure.

QUESTION 62:
A well-crafted phishing email (that impersonates a bank and convinces a user to provide credentials)  can affect which of the following?
Confidentiality
Availability
Integrity
Authenticity
Correct Answer: A
Detailed Solution: The immediate goal of most phishing attacks is to trick a user into revealing  "secrets" such as usernames, passwords, or credit card numbers.
Once the user provides these credentials to the attacker, the confidentiality of that data is instantly lost because an unauthorized  party now has access to it.

QUESTION 63:
Which of the following is a passive attack?
Modifying packets in transit to change their payload
Injecting forged packets into an existing TCP connection
Traffic analysis to infer communication patterns between two hosts
Launching a Denial-of-Service (DoS) attack to disrupt service
Correct Answer: C
Detailed Solution: A passive attack involves monitoring or observing communication without  altering data or affecting system operation.
Traffic analysis fits this definition because the attacker  studies communication patterns (such as timing, frequency, or endpoints) without modifying or  injecting any data.

QUESTION 64:
An attacker floods a web application with slow HTTP POSTs that hold connections open and exhaust  the server’s connection pool, causing legitimate clients to experience severe delays.
This attack is  best classified as:
A) Disruption
B) Disclosure
C) Usurpation
D) Deception
Correct Answer: A
Detailed Solution: The attack degrades or interrupts normal service (slowing/denying legitimate  access) a disruption (Denial-of-Service style) rather than disclosure or deception.

QUESTION 65:
Which activity both attempts to exploit vulnerabilities and demonstrates real-world impact  (often requiring written authorization before it’s performed)?
A) Reconnaissance
B) Vulnerability scanning
C) Penetration testing
D) Post-attack investigation
Correct Answer: C
Detailed Solution: Penetration testing actively attempts to exploit vulnerabilities to show  practical impact;
because of its intrusive nature it normally requires explicit permission.  Vulnerability scanning is usually non-exploitative (identifies possible problems).

QUESTION 66:
Which of the following mechanisms most directly provides non-repudiation for an online financial  transaction?
Using a strong password over HTTPS
Encrypting data using a shared symmetric key
Logging IP addresses and timestamps in a database
Digitally signing the transaction with the sender’s private key
Correct Answer:D
Detailed Solution:  Non-repudiation ensures a sender cannot deny having performed an action (e.g., sending a  transaction).
Digital signatures created with the sender’s private key can be verified using the  corresponding public key and are strongly tied to that identity → provides non-repudiation.
Strong passwords, symmetric encryption, and logs help with security and accountability but do  not, by themselves, guarantee cryptographic non-repudiation.

QUESTION 67:
Statement I: Authorization is the process of verifying the identity of a user or system.
Statement II: Non-repudiation ensures that a sender cannot later deny having sent a specific message.
Options:
I TRUE, II FALSE
B) I FALSE, II TRUE
C) Both TRUE
D) Both FALSE
Correct Answer: B
Detailed Solution: Statement I is false because authentication (not authorization) verifies identity; authorization  determines what an authenticated identity may do.
Statement II is true — non-repudiation ensures  accountability so the sender cannot deny sending.

QUESTION 68:
A start-up wants to deploy a custom web application. They want to upload their application  code and have the provider manage the underlying OS patches, middleware, and runtime,  while still allowing them to configure application settings and scale instances.
Which cloud  service model best fits?
SaaS
IaaS
PaaS
DaaS
Correct Answer:C
Detailed Solution: Platform-as-a-Service (PaaS) provides a managed runtime and middleware so developers can  deploy applications without managing OS-level patching or runtime installation.
IaaS would  require them to manage the OS/runtime themselves; SaaS is a finished application.

QUESTION 69:
A country’s data protection law requires that all personal data of its citizens must be stored and  processed only within that country’s geographic boundaries, even when using cloud services.
This  concern is most closely related to which cloud security risk category?
Regulatory Compliance & Audit
Data Location
Disaster Recovery & Business Continuity
Investigative Support
Correct Answer: B
Detailed Solution: The key phrase is “stored and processed only within that country’s geographic  boundaries.”
This is explicitly a data location concern (where data physically resides and is  processed).
While there is a regulatory driver, the specific risk category in cloud security terms here  is Data Location.
Regulatory Compliance & Audit is broader about meeting regulations; the example  is focused directly on location constraints.

QUESTION 70:
Vendor lock-in is most directly associated with which long-term viability challenge?
A) Difficulty in migrating data to another provider
B) Unauthorized data disclosure
C) Increased regulatory audits
D) Privileged user misuse
Correct Answer: A
Detailed Solution:Vendor lock-in makes it hard for customers to migrate applications and data due  to proprietary formats, APIs, or integrations.

Assignment-Week 7
QUESTION 71:
In a mobile cloud gaming application, users frequently experience frame drops and lag  when moving between different Wi-Fi and cellular networks.
The primary underlying  challenge specific to Mobile Cloud Computing (MCC) in this scenario is:
A) Insufficient number of installed games on the mobile device
B) High dependency on wide-area network conditions for remote execution
C) Overprovisioned CPU and memory on the mobile device
D) Removal of mobile device caches during gameplay
Correct Answer: B
Detailed Solution: MCC relies on remote servers for intensive computation.
As the device moves  across heterogeneous networks (Wi-Fi, 4G, 5G), variations in latency, bandwidth, and stability  cause performance degradation.
That is fundamentally network dependency and latency, not local  resource overprovisioning or caching issues.

QUESTION 72:
Which of the following is the primary reason for deploying a cloudlet (micro data center) in  a campus or stadium?
To eliminate the need for encryption between device and cloudlet
To provide low-latency compute for AR/VR and other real-time applications close to  users
To guarantee compliance with global data sovereignty laws
To permanently replace centralized cloud data centers
Correct Answer:B
Detailed Solution: The main purpose of a cloudlet is to bring computation closer to end users to  reduce latency and support real-time, interactive, and latency-sensitive applications such as  AR/VR, gaming, video analytics, and IoT processing.
This proximity minimizes round-trip delay  compared to distant centralized cloud data centers.

QUESTION 73:
Dynamic offloading decision engines often consider an energy-delay trade-off. Which  measured parameter below is least useful for that decision at runtime?
Current cellular bandwidth and RTT
Device battery remaining (percentage)
Number of apps installed on the device
Estimated CPU time for the task locally
Correct Answer: C
Detailed Solution: Installed app count is unrelated to the specific task's energy/delay trade-off;
bandwidth, battery state, and estimated local CPU time are directly relevant.

QUESTION 74:
A university deploys a small server cluster inside its campus cafeteria to support AR-based menu  visualization and nutrition analysis for students’ smartphones.
Computation is offloaded from  phones to this on-site cluster to minimize delay. This on-site resource is best described as:
A) A global hyperscale cloud data center
B) A cloudlet placed close to end users
C) A personal hotspot on a student’s phone
D) A satellite relay node in geostationary orbit
Correct Answer: B
Detailed Solution:A cloudlet is a small-scale data center placed near mobile users to support  low-latency offloading.
It is neither a global cloud region nor a personal hotspot or satellite node.

QUESTION 75:
A mobile banking app uses MCC to process transactions on cloud servers.
Data is transmitted over  the Internet from the app to the cloud.
Which of the following is the most critical security concern  in this context?
The screen size of the mobile device is too small
The app icon resolution being too high
Excessive variety of smartphone colors available in the market
Confidentiality of sensitive data while it is transmitted and processed
Correct Answer: D
Detailed Solution: When financial data (PINs, account details, transaction records) is sent to the  cloud, the primary concern is data confidentiality and privacy during transmission and processing.
Screen size, icon resolution, or phone color do not affect MCC security.

QUESTION 76:
Which of the following is a key advantage of Fog Computing over Cloud Computing?
Better support for real-time applications like healthcare monitoring and autonomous vehicles
Higher centralization of resources
Infinite storage capacity
Removal of network infrastructure
Correct Answer:A
Detailed Solution: Fog computing supports real-time, delay-sensitive applications by reducing  communication delays through local processing.
Cloud computing alone suffers from higher  latency due to distance from end devices.

QUESTION 77:
Which of the following best explains why 5G + Edge/Fog is often recommended for real-time  remote healthcare monitoring?
A) 5G guarantees zero packet loss in all deployments
B) 5G replaces the need for any local processing hardware
C) Edge processing reduces decision latency while 5G offers low transport latency and high  reliability
D) Edge nodes make patient data public for faster access
Correct Answer: C
Detailed Solution: Combining low-transport latency and high reliability from 5G with local edge  processing that avoids long round-trips reduces end-to-end latency (C).
Other statements are incorrect or unsafe.

QUESTION 78:
In geospatial cloud workflows that process very large satellite image tiles, which optimization  typically gives the most direct improvement in parallel processing throughput?
Increasing on-device screen resolution of the operator’s laptop
Using a single-threaded processing pipeline to avoid synchronization overhead
Renaming files to shorter filenames to reduce I/O time
Partitioning large raster tiles into spatially-indexed blocks processed in parallel
Correct Answer : D
Explanation : In geospatial cloud workflows, satellite imagery datasets are often extremely large  (multi-GB or TB-scale raster tiles).
Processing such data efficiently requires leveraging parallel and  distributed computing architectures (e.g., Spark, Hadoop, Dask, cloud-native geospatial pipelines).

QUESTION 79:
A startup processes global high-resolution satellite imagery and LiDAR data to detect deforestation  patterns.
When migrating to a geospatial cloud platform, which challenge is most fundamental from  a data-processing perspective?
Extremely high computation and storage demands for massive raster and vector datasets
The general lack of public interest in environmental topics
The impossibility of running any GIS software on cloud infrastructure
The mandatory removal of open geospatial standards (e.g., OGC standards) in cloud systems
Correct Answer: A
Detailed Solution: Satellite imagery and LiDAR produce huge raster and vector datasetsrequiring  high-performance computing, large storage, and parallel processing, which is the main challenge.
GIS tools can run in cloud environments, and standards are not removed by default.

Assignment-Week 8
QUESTION 81:
In Docker, which command will show all containers (both running and stopped) on the host?
docker ps
docker ps -a
docker container run
docker images
Correct Answer: B
Detailed Solution:docker ps shows only running containers.docker ps -a and the newer alias locker  container ls -a list all containers (running + stopped).
docker images lists images, not containers.

QUESTION 82:
Which statement about Docker volumes is TRUE?
A) Docker volumes are stored inside a container’s writable layer.
B) Docker volumes are automatically deleted when a container stops.
C) Docker volumes persist independently of the container lifecycle.
D) Docker volumes can only be attached to one container at a time.
Correct Answer: C
Detailed Solution: Docker volumes are managed by Docker and stored on the host filesystem (or  via a volume driver).
They exist outside the container’s writable layer and therefore:Remain intact  even if a container is stopped or removed, Can be reused by new containers, Support persistent data  storage

QUESTION 83:
Which statement best describes the relationship between containers and virtual machines?
A single container usually includes its own kernel, separate from the host.
Multiple containers can share the same OS kernel while running on a VM.
Containers must run directly on bare-metal hardware and cannot run inside VMs.
VMs must always run inside containers for isolation.
Correct Answer:B
Detailed Solution: Containers share the host kernel (which may itself be running inside a VM).
Thus,  one VM can host a container engine, and multiple containers can share that VM’s kernel.

QUESTION 84:
Which of the following is NOT a primary responsibility of Kubernetes?
A) Automatic restart of failed containers.
B) Scheduling containers across a cluster of nodes.
C) Providing low-level hardware virtualization via hypervisor extensions.
D) Load balancing traffic across multiple replicas of a service.
Correct Answer: C
Detailed Solution: Kubernetes works at the container orchestration layer and relies on the underlying  OS/virtualization.
It does not implement hardware-level virtualization (that is the job of hypervisors).

QUESTION 85:
In a Green Cloud data center, which strategy most directly reduces energy consumption while  maintaining SLA as much as possible?
Keeping all servers powered on but underutilized to handle sudden spikes.
Randomly assigning VMs to physical hosts to spread heat evenly.
Consolidating VMs onto fewer physical servers and powering down idle machines.
Running all workloads on the oldest hardware first to extend newer hardware lifetime.
Correct Answer: C
Detailed Solution: Energy-aware VM consolidation packs workloads efficiently onto fewer hosts,  allowing unused servers to be turned off or put into low-power states, reducing overall energy usage.

QUESTION 86:
Which is the biggest practical challenge when integrating wireless sensor networks (WSNs) directly  into a Sensor-Cloud?
Sensors typically cannot support full virtualization due to limited compute/memory.
Sensor nodes always have plentiful power and do not need energy-aware designs.
Sensors typically produce data that is low-volume, homogeneous and trivial to store.
Sensors natively run container orchestrators like Kubernetes.
Correct Answer: A
Detailed Solution: Sensor nodes are resource-constrained (CPU, memory, energy) and often cannot support  virtualization or heavy middleware directly;
middleware/gateways bridge them to the cloud. Options  B–D are incorrect or false.

QUESTION 87:
Which architecture is most appropriate to support ultra-low-latency IoT applications (e.g., industrial  control, autonomous systems) that cannot tolerate high round-trip time to a distant cloud?
A) Rely solely on centralized cloud data centers located far from devices.
B) Use edge/fog computing nodes closer to the devices for processing.
C) Buffer all data at the cloud and respond in large periodic batches.
D) Disable any local processing on devices and send raw data directly to the cloud.
Correct Answer: B
Detailed Solution: Edge/fog computing reduces latency by moving computation closer to the data  source.
A centralized cloud introduces higher latency due to physical distance and network hops.

QUESTION 88:
Why is it often necessary to preprocess or aggregate sensor data before long-term storage in large- scale IoT/Sensor Cloud systems?
To reduce rapidly growing storage and processing costs from raw high-volume data
Because all sensor data is already compressed and easy to store
To eliminate the need for cloud infrastructure
To make sensors consume more battery power
Correct Answer: A
Detailed Solution: Raw IoT data is generated continuously and in large volumes.
Without filtering,  aggregation, or preprocessing, storing and analyzing all raw data causes storage and computation  costs to increase quickly, making the system inefficient and expensive.

QUESTION 89:
Consider the following statements about virtualization in a Sensor Cloud:
Statement 1: Virtual sensors can be created by aggregating, filtering, or combining data from  multiple physical sensors.
Statement 2: Virtualization in a Sensor Cloud allows multiple applications to share the same  underlying physical sensor infrastructure.
Which option is correct?
A) Statement 1 is True and Statement 2 is False
B) Statement 1 is False and Statement 2 is True
C) Both statements are True
D) Both statements are False
Correct Answer: C
Detailed Solution: Sensor virtualization abstracts physical sensing resources into logical (virtual)  sensors.
These virtual sensors may represent processed or fused data from multiple physical sensors.
This abstraction layer enables resource sharing, meaning several applications can use the same  physical sensor infrastructure without direct hardware dependency.

QUESTION 90:
What is the primary reason latency-critical IoT applications (e.g., autonomous vehicle control)  cannot rely solely on a centralized cloud?
A) Cloud data centers are too expensive to operate.
B) Physical network distance to cloud data centers introduces unacceptable round-trip latency.
C) Cloud platforms do not support real-time data analytics.
D) IoT devices cannot connect to the internet continuously.
Correct Answer: B
Explanation: For real-time control systems, even small delays matter. Sending data to distant centralized cloud  data centers adds propagation and network delay, making it difficult to meet strict latency  requirements.
Hence, relying only on centralized cloud infrastructure is unsuitable for ultra-low latency applications.

Assignment-Week 9

QUESTION 91:
Which of the following best describes the difference between cloud computing and fog  computing?
Cloud computing processes data near IoT devices, while fog computing processes data only in  centralized data centers.
Cloud computing offers distributed processing across gateways, while fog computing performs  computation only in the cloud core.
Cloud computing relies on centralized data centers for computation, whereas fog computing  distributes processing closer to end devices through intermediate nodes.
Cloud computing is used only for storage, while fog computing is used only for real-time  analytics.
Correct Answer: (C)
Detailed Solution: Cloud computing relies on centralized, large data centers that may be far from  users, which can increase latency.
Fog computing extends cloud services closer to end devices  through intermediate nodes like gateways and local servers.
This reduces delay, supports real-time  processing, and lowers bandwidth usage, acting as a bridge between edge devices and the cloud

QUESTION 92:
An autonomous vehicle that must instantly detect obstacles and apply brakes should  primarily rely on:
Cloud computing
Fog computing
Edge computing
Centralized data warehouse
Correct Answer: (C)
Detailed Solution: Autonomous vehicles need ultra-low latency for safety actions like obstacle detection and braking.
Processing must happen on the vehicle’s onboard edge system to avoid  network delays.
Fog and cloud support tasks like analytics, updates, and model training, but real time control decisions must be handled at the edge.

QUESTION 93:
In terms of physical proximity to end devices (closest to farthest), which order is correct?
Cloud → Fog → Edge
Edge → Fog → Cloud
Fog → Edge → Cloud
Edge → Cloud → Fog
Correct Answer: (B)
Detailed Solution: Edge computing operates directly at or near the data source, such as IoT devices and sensors.
Fog computing works at an intermediate level using gateways and local  servers for regional processing.
Cloud computing is the farthest layer, relying on centralized data  centers that may be geographically distant from end devices.

QUESTION 94:
Which resource management strategy is most important to prevent overload when many  edge devices send data to nearby fog nodes?
Increasing storage capacity at a single fog node
Static task allocation
Load balancing across fog nodes
Sending all data directly to the cloud
Correct Answer: C
Detailed Solution: When many edge devices send data, one fog node can become overloaded.
Static allocation or just adding storage doesn’t handle changing workloads well.
Load balancing  spreads tasks across multiple fog nodes, avoiding congestion and keeping latency low.
Sending all  data to the cloud increases delay and bandwidth use, defeating the purpose of fog computing.

QUESTION 95:
Which statement best explains task offloading decisions in a fog–edge–cloud architecture?
All tasks must first be processed in the cloud before reaching fog or edge
Edge devices always offload tasks to the cloud, bypassing fog
Time-critical tasks are handled at edge/fog, while computation-intensive but delay-tolerant  tasks are sent to the cloud
Fog nodes only store data and do not participate in computation
Correct Answer: (C)
Detailed Solution:In a hierarchical system, task placement is based on latency needs and  computing demand.
Time-critical tasks run at the edge or fog to reduce delay, while computation intensive but delay-tolerant tasks are sent to the cloud.
This layered approach balances fast  response with efficient use of large-scale resources.

QUESTION 96:
Which factor most strongly influences whether a task should be executed at the edge  instead of the cloud?
Data archival requirements
Latency sensitivity of the application
Cloud storage capacity
Size of historical datasets
Correct Answer: (B)
Detailed Solution: Edge computing is chosen primarily when an application is delay-sensitive  (e.g., real-time control, emergency response).
Cloud is better for storage or heavy batch processing,  but latency constraints push computation toward the edge.

QUESTION 97:
Which metric is most directly optimized when moving computation from cloud to fog  nodes?
Disk storage size
Network latency
Data encryption level
Database consistency
Correct Answer: (B)
Detailed Solution: Fog nodes are geographically closer to devices, so shifting tasks from cloud to  fog mainly reduces communication delay, improving real-time performance.

QUESTION 98:
Which issue is most critical for maintaining trust among Cloud Service Providers (CSPs) in  a cloud federation?
Uniform hardware configuration across all CSPs
Standardized pricing models only
Federated identity management and secure SLA enforcement
Centralized ownership of all federated data centers
Correct Answer: (C)
Detailed Solution: In a cloud federation, independent CSPs cooperate while staying autonomous.
Trust relies on strong identity federation, authentication, authorization, and strict SLA enforcement.
Without secure identity management and policy compliance, resource sharing becomes risky.
Uniform hardware or pricing isn’t required, and centralized ownership goes against the federation  model.

QUESTION 99:
Which architectural mechanism most enables interoperability in a cloud federation?
Proprietary APIs unique to each CSP
Closed resource management policies
Standardized interfaces and open protocols (e.g., REST, OCCI, CIMI)
Centralized control by a single dominant CSP
Correct Answer: (C)
Detailed Solution: Cloud federation connects independent CSPs with different platforms.
Interoperability depends on standardized APIs, open protocols, and common service description  models (e.g., REST, OCCI, CIMI).
Proprietary systems or centralized control oppose federation  principles. Without standards, cross-provider discovery, migration, and orchestration are very  difficult.

QUESTION 100:
Which scenario best justifies the need for workload migration in a hybrid cloud federation?
When all workloads have identical security and compliance requirements
When private cloud resources are underutilized and public cloud is idle
When sensitive workloads must remain on private infrastructure, but burst workloads require  additional public cloud capacity
When interoperability between clouds is intentionally restricted
Correct Answer: C
Detailed Solution: Hybrid cloud federation lets organizations keep sensitive workloads in private  clouds for security and compliance while using public clouds for scalable capacity during peak  demand.
Workload migration helps balance cost, performance, and security. If all workloads had  identical needs, migration wouldn’t be required, and ignoring interoperability or objectives would  defeat the purpose of hybrid cloud use.

Assignment-Week 10

QUESTION 101:
Which issue is most critical when performing live VM migration across geographically distributed data centers?
Uniform CPU clock speed across hosts
High network latency and bandwidth variability between sites
Availability of local storage at the source host
Increasing the number of VM snapshots
Correct Answer: (B)
Detailed Solution: Live VM migration across distant data centers depends heavily on network  performance.
High latency and fluctuating bandwidth can slow memory state transfer, increase  migration time, and risk service degradation.
CPU clock differences are usually handled by  hypervisors, and snapshots/storage are secondary.
Network conditions are the dominant technical  challenge in wide-area live migration.

QUESTION 102:
Which migration technique generally consumes the highest network bandwidth?
Cold migration
Pre-copy migration
Post-copy migration
Offline image transfer
Correct Answer: (B)
Detailed Solution: In pre-copy migration, memory pages are transferred multiple times while the  VM is still running, especially pages that are frequently modified (dirty pages).
This repeated  transmission increases total network traffic. Cold migration transfers memory only once but with  downtime, while post-copy avoids repeated full memory copying, making pre-copy the most  bandwidth-intensive.

QUESTION 103:
Which factor most increases energy consumption during live migration in fog  environments?
Small VM memory footprint
Short network distance between nodes
Frequent retransmission of dirty memory pages
Low CPU utilization on source host
Correct Answer: (C)
Detailed Solution: In live migration (especially pre-copy phases), memory pages that are  repeatedly modified must be retransmitted multiple times.
This increases network usage, CPU  activity, and migration duration, all of which raise energy consumption.
Smaller memory, shorter  distance, or low CPU load would reduce energy use, not increase it.

QUESTION 104:
In container-based cloud environments, what is the primary role of Kubernetes?
To build container images from application source code
To provide low-level container runtime like Docker Engine
To orchestrate, schedule, scale, and manage containers across clusters
To replace virtual machines entirely
Correct Answer: C
Detailed Solution: Kubernetes is a container orchestration platform. It manages container  deployment, scheduling, auto-scaling, self-healing, load balancing, and rolling updates across  multiple nodes.
It does not build images (Docker does), nor does it act as the container runtime  itself.
VMs can still exist underneath Kubernetes clusters.

QUESTION 105:
Which Docker component is responsible for handling build instructions defined in a  Dockerfile?
Docker Hub
Docker CLI
Docker Daemon
Docker Registry
Correct Answer: (C)
Detailed Solution: When you run docker build, the Docker CLI sends the request to the Docker  Daemon, which actually processes the Dockerfile instructions, builds layers, and creates the image.
Registries only store images.

QUESTION 106:
Which Docker feature ensures that a container runs in isolation from the host system?
Hypervisor
Linux namespaces and cgroups
Virtual machine snapshots
Docker Swarm
Correct Answer: (B)
Detailed Solution: Docker uses Linux namespaces for process isolation and control groups  (cgroups) for resource limits (CPU, memory).
This provides lightweight isolation without full  virtualization.

QUESTION 107:
Statement 1: Docker volumes persist data even if a container is deleted.
Statement 2: Data stored inside a container’s writable layer remains safe after the container  is removed.
Only statement 1 is true
Only statement 2 is true
Both statements are true
Both statements are false
Correct Answer: A
Detailed Solution: Docker volumes are managed outside the container’s lifecycle, so their data  persists even if the container is removed.
However, the container’s writable layer is deleted along  with the container, meaning any data stored only there is lost.

QUESTION 108:
In Docker, __________ is responsible for creating and managing containers on the host  system.
Docker Hub
Docker Engine
Kubernetes
Dockerfile
Correct Answer: B
Detailed Solution: Docker Engine is the core runtime that builds, runs, and manages containers on  a host machine.
Docker Hub stores images, Kubernetes handles orchestration, and a Dockerfile  only contains build instructions.

QUESTION 109:
If a VM has 64 GB memory and the migration channel supports 8 MB/sec, what is the total  migration time and downtime for non-live VM migration?
1 hour, 1 hour
2 hours, 2 hours
2.5 hours, 2.5 hours
3 hours, 3 hours
Correct Answer: B
Detailed Solution:  =(64 × 2³⁰) / (8 × 2²⁰) = 8192 seconds ≈ 2.27 hours ≈ 2 hours.

QUESTION 110:
Containers require a full guest operating system to run.
True
False
Correct Answer: B
Detailed Solution: Containers share the host OS kernel and do not require a full guest operating system like virtual  machines.
This makes them lightweight and faster to start.

Assignment-Week 11

QUESTION 111:
Which characteristic most distinguishes Dew computing from Edge computing?
Both rely completely on continuous internet connectivity
Dew computing nodes can operate fully offline and later synchronize with the cloud
Edge computing provides only storage, while dew provides computation
Dew computing replaces cloud infrastructure entirely
Correct Answer: B
Detailed Solution: Dew computing emphasizes autonomous local operation, where end devices  continue functioning without network access and synchronize later.
Edge computing reduces latency  but often still depends on networked infrastructure for coordination.

QUESTION 112:
Which application scenario best fits Dew computing?
Real-time stock trading requiring constant global updates
Remote rural education systems with unstable internet connectivity
High-performance weather modeling in supercomputers
Centralized banking transaction processing
Correct Answer: B
Detailed Solution: Dew computing suits environments with intermittent connectivity, such as rural  education, remote healthcare, or field data collection.
Devices function locally and sync when online.  Constantly connected, latency-critical systems are better served by edge/fog/cloud.

QUESTION 113:
Which layer in Dew computing is primarily responsible for conflict resolution after offline  operation?
Physical sensor layer
Dew layer device
Cloud layer synchronization service
Network routing layer
Correct Answer: C
Detailed Solution: Dew devices may modify data offline, but conflict detection and resolution logic  is typically handled during synchronization with the cloud layer, which maintains global consistency.

QUESTION 114:
What is the main trade-off introduced by Dew computing?
Reduced latency vs increased hardware virtualization
Local autonomy vs data consistency complexity
High scalability vs low storage
Better security vs no offline capability
Correct Answer: B
Detailed Solution: Allowing devices to operate independently increases autonomy, but later  synchronization introduces challenges in maintaining global data consistency, especially when  conflicts arise.

QUESTION 115:
Which issue commonly affects performance in serverless applications?
VM hypervisor overhead
Cold start latency
Disk fragmentation
Hardware driver conflicts
Correct Answer: B
Detailed Solution: When a function is invoked after being idle, the platform may need to initialize  a new runtime container.
This delay is called a cold start, a known challenge in FaaS systems.

QUESTION 116:
Why are serverless functions typically designed to be stateless?
To reduce electricity consumption
Because local storage is unlimited
To allow automatic scaling and parallel execution without dependency conflicts
To avoid using APIs
Correct Answer: C
Detailed Solution: Statelessness ensures each function invocation is independent, allowing the  platform to scale horizontally and run multiple instances in parallel without coordination issues.

QUESTION 117:
Which factor most limits the suitability of FaaS for long-running scientific simulations?
Lack of GPU support
Function execution time limits enforced by providers
No internet access
Inability to process data streams
Correct Answer: B
Detailed Solution: FaaS platforms enforce maximum execution time limits (e.g., minutes).
Long running HPC simulations exceed these limits, making FaaS unsuitable.

QUESTION 118:
Why is direct file system storage unreliable for persistent data in FaaS?
File systems are encrypted
Functions run on different hosts and local storage is ephemeral
Storage speed is too slow
Providers disable disk access
Correct Answer: B
Detailed Solution: FaaS instances are ephemeral and may run on different machines each time.
Local file system data is not guaranteed to persist across invocations.

QUESTION 119:
Which of the following describes a hard limit for AWS Lambda function execution?
Functions can run indefinitely until manually stopped
Each AWS Lambda invocation has a maximum timeout of 15 minutes
AWS Lambda allows up to 1 hour per invocation
AWS Lambda timeouts are configurable with no upper bound
Correct Answer: (B)
Detailed Solution: AWS Lambda functions can be configured to run for up to 900 seconds (15  minutes) per invocation.
If execution exceeds this limit, AWS automatically terminates the function

QUESTION 120:
Amazon Redshift is a fully managed cloud data warehouse service provided by __________.
Google
Microsoft
Amazon Web Services
Oracle
Correct Answer: C
Detailed Solution: Amazon Redshift is AWS’s managed data warehousing service designed for  large-scale analytics using columnar storage and distributed query processing.

Assignment-Week 12
QUESTION 121:
MCC helps mobile devices by:
1. Extending storage capacity
2. Supporting heavy data analytics
3. Removing wireless communication delays completely
4. Enabling scalable resource usage
A) 1, 2, and 4 only
B) 1 and 3 only
C) 2 and 3 only
D) All of the above
Correct Answer: A

QUESTION 122:
Which type of data is primarily handled in Spatial Cloud Computing systems?
A) Text logs
B) Financial transactions
C) Geospatial data (coordinates, maps, satellite imagery)
D) Email messages
Correct Answer: C

QUESTION 123:
Which application domain most benefits from Spatial Cloud Computing?
A) Online gaming leaderboards
B) Weather forecasting and disaster management
C) Social media messaging
D) Office document editing
Correct Answer: B

QUESTION 124:
In Cyber-Physical Systems (CPS), real-time feedback between sensors and actuators is essential for:
A) Data archiving
B) Closed-loop control
C) Static data analysis
D) Batch processing
Correct Answer: B

QUESTION 125:
A ________ is a trace generated by a moving object in geographical space, usually represented by a series of chronologically ordered points.
A) Time series
B) Road map
C) Spatial trajectory
D) Spatial crowdsourcing
Correct Answer: C

QUESTION 126:
Smart health monitoring systems where wearable sensors collect data, nearby gateways preprocess it, and cloud servers perform long-term analytics represent which paradigm?
A) Edge computing only
B) IoT without cloud support
C) Cloud-Fog-Edge integrated IoHT architecture
D) Centralized cloud computing
Correct Answer: C

QUESTION 127:
In V2V communication, the primary objective is:
A) Providing internet access to vehicles
B) Exchanging safety-critical information such as speed, position, and braking
C) Supporting infotainment systems
D) Uploading vehicle data to cloud storage
Correct Answer: B

QUESTION 128:
Which technology is most commonly associated with low-latency V2X safety messaging?
A) Bluetooth
B) Wi-Fi (802.11n home Wi-Fi)
C) DSRC/IEEE 802.11p
D) NFC
Correct Answer: C

QUESTION 129:
A major benefit of real-time mobility analytics in urban transport systems is:
A) Eliminating the need for traffic laws
B) Dynamic traffic signal optimization based on live vehicle density
C) Reducing vehicle manufacturing costs
D) Preventing all road accidents
Correct Answer: B

QUESTION 130:
Which of the following is a key advantage of 5G eMBB over 4G LTE?
A) Lower latency for critical control applications
B) Extremely high data rates and improved bandwidth efficiency
C) Infinite network coverage
D) Eliminates need for base stations
Correct Answer: B
`;

// 2. PARSER LOGIC
function parseData(text) {
    const quizData = [];
    // We split by "QUESTION \d+:" but we KEEP the delimiter to extract the actual number
    const blocks = text.split(/(?=QUESTION\s*\d+:)/i).filter(b => b.trim().length > 0);

    blocks.forEach(block => {
        // Strip out the tags
        const lines = block.split('\n')
            .map(l => l.replace(/^\[(?:source|cite):\s*\d+\]\s*/i, '').trim())
            .filter(l => l.length > 0);

        // Extract the actual question number from the block
        let qNum = 0;
        const qNumMatch = block.match(/QUESTION\s*(\d+):/i);
        if (qNumMatch) {
            qNum = parseInt(qNumMatch[1], 10);
        }

        let qText = '';
        let options = [];
        let correctText = '';
        let explanationText = '';
        let state = 'q'; 

        // Strip the literal "QUESTION X:" from the text so it doesn't double print
        if (lines[0].match(/^QUESTION\s*\d+:/i)) {
            lines.shift();
        }

        lines.forEach(line => {
            if (state === 'q') {
                if (line.match(/^(a\)|b\)|c\)|d\)|A\.|B\.|C\.|D\.|A\)|B\)|C\)|D\)|1\.|2\.|3\.|4\.)/i) || line.match(/^[A-D]\s/)) {
                    state = 'o';
                    options.push(line);
                } else if (line.toLowerCase().startsWith('correct answer') || line.toLowerCase().startsWith('correct option') || line.toLowerCase().startsWith('answer:') || line.toLowerCase().startsWith('corrected answer')) {
                    state = 'a';
                    correctText = line;
                } else {
                    qText += (qText ? '<br>' : '') + line;
                }
            } else if (state === 'o') {
                if (line.toLowerCase().startsWith('correct answer') || line.toLowerCase().startsWith('correct option') || line.toLowerCase().startsWith('answer:') || line.toLowerCase().startsWith('corrected answer')) {
                    state = 'a';
                    correctText = line;
                } else if (line.match(/^(a\)|b\)|c\)|d\)|A\.|B\.|C\.|D\.|A\)|B\)|C\)|D\)|1\.|2\.|3\.|4\.)/i) || line.match(/^[A-D]\s/)) {
                    options.push(line);
                } else {
                    if(options.length > 0) options[options.length - 1] += ' ' + line;
                }
            } else if (state === 'a') {
                if (line.toLowerCase().startsWith('detailed solution') || line.toLowerCase().startsWith('explanation') || line.toLowerCase().startsWith('solution')) {
                    state = 'e';
                    explanationText = line;
                } else {
                    correctText += ' ' + line;
                }
            } else if (state === 'e') {
                explanationText += ' ' + line;
            }
        });

        let correctIndices = [];
        const ansLower = correctText.toLowerCase();

        options.forEach((opt, idx) => {
            const match = opt.match(/^([A-D1-4])/i);
            if (match) {
                const prefix = match[1].toLowerCase();
                const regex = new RegExp(`\\b${prefix}\\b|\\(${prefix}\\)`, 'i');
                if (regex.test(ansLower)) correctIndices.push(idx);
            }
        });

        if (correctIndices.length === 0) {
             if (ansLower.includes('a') || ansLower.includes('1')) correctIndices.push(0);
             else if (ansLower.includes('b') || ansLower.includes('2')) correctIndices.push(1);
             else if (ansLower.includes('c') || ansLower.includes('3')) correctIndices.push(2);
             else if (ansLower.includes('d') || ansLower.includes('4')) correctIndices.push(3);
             else correctIndices.push(0);
        }

        // Only add if it's a valid question
        if (qNum > 0) {
            quizData.push({
                qNum: qNum,
                q: qText,
                o: options,
                a: correctIndices,
                e: explanationText || "No detailed explanation provided for this question."
            });
        }
    });

    // CRITICAL FIX: Sort the questions numerically. 
    // The raw text had Q80 next to Q10, this forces them into proper order!
    quizData.sort((a, b) => a.qNum - b.qNum);
    return quizData;
}

const allQuizData = parseData(rawData);
let currentQuizSet = []; // This will hold the specific assignment selected

// 3. QUIZ STATE
let currentQ = 0;
let score = 0;
let attemptedCount = 0; 
let selectedIdx = null;

// 4. SETUP LOGIC
function startQuiz() {
    const selection = document.getElementById('assignment-select').value;
    
    if (selection === 'all') {
        currentQuizSet = allQuizData;
    } else {
        const assignmentNumber = parseInt(selection, 10);
        const startIndex = assignmentNumber * 10;
        const endIndex = startIndex + 10;
        
        // Grab just the 10 questions for this specific assignment
        currentQuizSet = allQuizData.slice(startIndex, endIndex);
    }

    // Reset stats
    currentQ = 0;
    score = 0;
    attemptedCount = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('attempted').innerText = attemptedCount;

    // Switch UI
    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';

    loadQuestion();
}

// 5. UI LOGIC
function loadQuestion() {
    selectedIdx = null;
    
    if (currentQ >= currentQuizSet.length) {
        finishQuiz();
        return;
    }

    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';

    const q = currentQuizSet[currentQ];
    
    // Show which question out of the set we are on, plus the actual document question number
    document.getElementById('question-tracker').innerText = `Question ${currentQ + 1} of ${currentQuizSet.length}`;
    document.getElementById('question').innerHTML = `Q${q.qNum}. ${q.q}`;
    
    const optsEl = document.getElementById('options');
    optsEl.innerHTML = '';
    
    q.o.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = opt;
        btn.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedIdx = idx;
            document.getElementById('submit-btn').disabled = false;
        };
        optsEl.appendChild(btn);
    });
}

function submitAnswer() {
    const q = currentQuizSet[currentQ];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true); 
    document.getElementById('submit-btn').style.display = 'none';

    const isCorrect = q.a.includes(selectedIdx);

    attemptedCount++;
    if (isCorrect) {
        score++;
    }
    
    document.getElementById('score').innerText = score;
    document.getElementById('attempted').innerText = attemptedCount;

    if (isCorrect) {
        btns[selectedIdx].classList.add('correct');
    } else {
        btns[selectedIdx].classList.add('wrong');
        q.a.forEach(correctIdx => {
            if (btns[correctIdx]) btns[correctIdx].classList.add('correct');
        });
    }

    const expEl = document.getElementById('explanation');
    expEl.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br><br>${q.e}`;
    expEl.style.display = 'block';
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQ++;
    loadQuestion();
}

function finishQuiz() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('result-area').style.display = 'block';

    const unattemptedCount = currentQuizSet.length - attemptedCount;

    document.getElementById('final-score').innerText = score;
    document.getElementById('final-attempted').innerText = attemptedCount;
    
    const unattemptedText = document.getElementById('unattempted-text');
    if (unattemptedCount > 0) {
        unattemptedText.innerText = `You left ${unattemptedCount} questions unattempted (out of ${currentQuizSet.length} total in this set).`;
        unattemptedText.style.display = 'block';
    } else {
        unattemptedText.style.display = 'none'; 
    }
}