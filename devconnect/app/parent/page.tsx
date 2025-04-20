import UserProfile from "@/app/components/parent/UserProfile";
import Post from "@/app/components/parent/Post";
import UserProfileWrapper from "@/app/components/parent/UserProfileWrapper";

export default function ParentPage() {
  const posts = [
    {
      publisherName: "John Doe",
      publisherPhoto: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
      aboutPublisher: "Software Engineer at Google",
      postImage: "https://tse3.mm.bing.net/th?id=OIP._MqVkU2RjgGfCV-SBBnZNAHaEK&pid=Api&P=0&h=180",
      postContent: "We go to great lengths to keep certain types of produce separated throughout the journey, and for good reason. Ripening fruits and vegetables emit ethylene gas, which can accelerate the aging and decay of cut flowers and greens. Thus, keeping them separate plays a significant role in preserving the quality of our customers’ products.There are many more avenues we take to keep our cargo as fresh as can be.We go to great lengths to keep certain types of produce separated throughout the journey, and for good reason. Ripening fruits and vegetables emit ethylene gas, which can accelerate the aging and decay of cut flowers and greens. Thus, keeping them separate plays a significant role in preserving the quality of our customers’ products.There are many more avenues we take to keep our cargo as fresh as can be.We go to great lengths to keep certain types of produce separated throughout the journey, and for good reason. Ripening fruits and vegetables emit ethylene gas, which can accelerate the aging and decay of cut flowers and greens. Thus, keeping them separate plays a significant role in preserving the quality of our customers’ products.There are many more avenues we take to keep our cargo as fresh as can be.  "
    },
    {
      publisherName: "Alice Smith",
      publisherPhoto: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
      aboutPublisher: "UI/UX Designer at Meta",
      postImage: "https://tse3.mm.bing.net/th?id=OIP._MqVkU2RjgGfCV-SBBnZNAHaEK&pid=Api&P=0&h=180",
      postContent: "Loving the new design trends this year! 🎨"
    },
    {
      publisherName: "Michael Brown",
      publisherPhoto: "https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api",
      aboutPublisher: "Data Scientist at Amazon",
      postImage: "https://tse3.mm.bing.net/th?id=OIP._MqVkU2RjgGfCV-SBBnZNAHaEK&pid=Api&P=0&h=180",
      postContent: "AI is changing the world! What do you think? 🤖"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1f1f1f] flex">
      {/* Sidebar Profile Section */}
      <UserProfileWrapper />
      {/* <UserProfile
        name="John Doe"
        profileImage="https://tse1.mm.bing.net/th?id=OIP.iEdku3hRrPYvMlM5RGxoMQHaHa&pid=Api"
        about="Software Engineer passionate about Web Development, AI, and Open Source."
        institution="XYZ University"
        institutionLogo="https://tse2.mm.bing.net/th?id=OIP.Kc5aeSbLiKspoP2qNfQ-yAAAAA&pid=Api&P=0&h=180"
        follower={100}
        viewer={1000}
      /> */}

      {/* Main Content Section */}
      <div className="flex-1 ml-80 p-6 bg-gray-100 dark:bg-gray-900  min-h-screen">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
