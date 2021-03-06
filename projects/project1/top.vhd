--Libraries Declaration
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
--Entity Declaration
entity top is
  port(
        A,B,C,D: in std_logic_vector(1 downto 0);
        X: out std_logic_vector(4 downto 0)
  );
end top;
--Architecture of Entity
architecture behavioral of top is
--Signals and Components
signal prod1,prod2 : std_logic_vector(3 downto 0);
component mul
  port(
        in1,in2 : in std_logic_vector(1 downto 0);
        prod: out std_logic_vector(3 downto 0)
    );
end component;
component add
  port(
    in1,in2 : in std_logic_vector(3 downto 0);
    result: out std_logic_vector(4 downto 0)
  );
end component;
begin
  MUL1: mul port map (A,B,prod1);
  MUL2: mul port map (in1 => C, in2=>D, prod=>prod2);
  ADD1: add port map (in1 => prod1,in2=> prod2,result=>X); 
end behavioral; 